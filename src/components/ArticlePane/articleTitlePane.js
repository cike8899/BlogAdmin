import React, { Component } from 'react';
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
        let o = this.props.actions.addEmptyNote({ id: "empty", title: "", content: "", tags: "" });
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
        console.info(idx, this);
    }

    handleItemStyle(idx) {
        if (this.state.currentIdx === idx) {
            return `${style["new-article-item"]} ${style['new-article-item-active']}`;
        } else {
            return style["new-article-item"];
        }
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

    render() {
        let rows = this.props.notes.rows;
        console.info("ArticleTitlePane:render", this.props.notes);
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
                                <ArticleTitleItem key={x.id} note={x} sty={this.handleItemStyle(x.id)}
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