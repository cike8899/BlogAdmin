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
        this.state = {
            articleTitleItems: [],
            menuPaneClass: `${menuStyle["title-menu-pane-hidden"]} ${menuStyle["title-menu-pane"]}`
        }
    }

    handlePlusClick(e) {
        this.state.articleTitleItems.push(1);
        this.setState({ articleTitleItems: this.state.articleTitleItems });
    }

    handleContextMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        console.info("popup");
        var sty = menuStyle["title-menu-pane"];
        this.setState({ menuPaneClass: menuStyle["title-menu-pane"] });
    }

    render() {
        return (
            <div className={`${style["main-con"]} ${style["article-list-wrap"]}`}>
                <div className={style["edit-article-title"]}>
                    <span className={style["edit-article-title-inner-left"]}>
                        <FontAwesome name="file-text" />
                        <span className={style["edit-article-title-text"]}>文章列表</span>
                    </span>
                    <span className={style["edit-article-title-inner-right"]}>
                        <FontAwesome name="plus" className={style["plus-icon"]} onClick={(e) => { this.handlePlusClick(e) } } />
                    </span>
                </div>
                <div onContextMenu={(e) => { this.handleContextMenu(e) } }>
                    {this.state.articleTitleItems.map((x, idx) => {
                        return (
                            <ArticleTitleItem key={idx} />
                        );
                    })}
                </div>
                <TitleMenuPane className={this.state.menuPaneClass} />
            </div>
        );
    }
}

export default ArticleTitlePane;