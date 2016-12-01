import React, { Component } from 'react';
import { message } from 'antd';
import style from '../../styles/article.less';
import FontAwesome from 'react-fontawesome';
import ArticleTitleItem from './articleTitleItem';
import { ContextMenu, MenuItem, ContextMenuLayer } from "react-contextmenu";
import TitleContextMenu from './titleContextMenu';
import TitleMenuPane from './titleMenuPane';
import menuStyle from './titleMenuPane.less';

// const Layer = ContextMenuLayer("some_unique_identifier")(ArticleTitleItem);

class ArticleTitlePane extends Component {
    constructor(props, context) {
        super(props, context);
        this.isFetchSucceed = true;
        this.state = {
            articleTitleItems: [],
            menuPaneClass: `${menuStyle["title-menu-pane-hidden"]} ${menuStyle["title-menu-pane"]}`,
            currentIdx: null
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handlePlusClick(e) {
        // this.state.articleTitleItems.unshift(1);
        // this.setState({ articleTitleItems: this.state.articleTitleItems });
        let notes = this.props.notes.rows;
        if (notes.length > 0 && notes.some(y => y.id === "empty")) {
            message.warning("请先保存文章");
        } else {
            let promise = this.props.actions.addEmptyNote({ id: "empty", title: "", content: "", tags: [] });
        }

    }

    handleContextMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        console.info("popup");
        var sty = menuStyle["title-menu-pane"];
        this.setState({ menuPaneClass: menuStyle["title-menu-pane"] });
    }

    handleItemClick(idx) {
        this.setState({ "currentIdx": idx });
        this.props.actions.updateSelectedNote(idx);
    }

    handleItemStyle(idx) {
        if (this.state.currentIdx === idx) {
            return `${style["new-article-item"]} ${style['new-article-item-active']}`;
        } else {
            return style["new-article-item"];
        }
    }

    judgeItemIsSeletced(idx) {
        let isSelected = false;
        if (this.state.currentIdx === idx) {
            isSelected = true;
        }
        return isSelected;
    }

    handleItemWrapScroll(e) {
        e.preventDefault();
        e.stopPropagation();
        let scrollHeight = e.target.scrollHeight;
        let clientHeight = e.target.clientHeight;
        let scrollTop = e.target.scrollTop;
        console.info(scrollHeight - scrollTop);
        let total = this.props.notes.count;
        let currentLength = this.props.notes.rows.length;
        if (scrollHeight - scrollTop - 10 <= clientHeight) {//异步读取数据
            if ((currentLength < total) && this.isFetchSucceed) {
                this.isFetchSucceed = false;
                let currentPage = (currentLength / 20) + 1;
                console.info("currentPage:", currentPage);
                let promise = this.props.actions.getNotesByPage(currentPage);
                // promise.then((data) => {
                //     this.isFetchSucceed = true;
                // }, (err) => {
                //     console.info(err);
                // });
            }
        }
    }

    handleItemWrapWheel(e) {
        console.info("wheel:", e);
    }

    componentWillReceiveProps(nextProps) {
        let currentRows = nextProps.notes.rows;
        let selectedNote = nextProps.notes.selectedNote;
        if (currentRows.length > 0 && currentRows.length <= 20) {//表明是第一次加载,添加第一项的背景色
            if (selectedNote.id === null) {//第一次加载，还没有选中操作
                this.setState({ currentIdx: currentRows[0].id });
            } else {
                this.setState({ currentIdx: selectedNote.id });
            }
        }
        if (nextProps.notes.rows.length > this.props.notes.rows.length) {
            this.isFetchSucceed = true;
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.info("shouldComponentUpdate:", nextProps);
        return true;
    }


    componentWillUpdate(nextProps, nextState) {
        console.info("nextProps:", nextProps);
    }


    componentWillMount() {
        this.props.actions.getNotesByPage(1);
    }


    render() {
        let rows = this.props.notes.rows;
        return (
            <div className={`${style["main-con"]} ${style["article-list-wrap"]}`}>
                <div className={style["edit-article-title"]}>
                    <span className={style["edit-article-title-inner-left"]}>
                        <FontAwesome name="file-text" />
                        <span className={style["edit-article-title-text"]}>文章列表</span>
                    </span>
                    <span className={style["edit-article-title-inner-right"]}>
                        <FontAwesome name="plus" className={style["plus-icon"]}
                            onClick={(e) => { this.handlePlusClick(e) } } />
                    </span>
                </div>
                <div className={style["edit-article-item-wrap"]}
                    onScroll={(e) => { this.handleItemWrapScroll(e) } }>
                    <div className={style["edit-article-item-inner"]}
                        onContextMenu={(e) => { this.handleContextMenu(e) } }>
                        {rows.map((x, idx) => {
                            return (
                                <ArticleTitleItem key={x.id} note={x}
                                    isSelected={this.judgeItemIsSeletced(x.id)}
                                    selectedNote={this.props.notes.selectedNote}
                                    sty={this.handleItemStyle(x.id)}
                                    handleClick={this.handleItemClick} />
                            );
                        })}
                    </div>
                </div>
                <TitleMenuPane className={this.state.menuPaneClass} />
            </div>
        );
    }
}

export default ArticleTitlePane;