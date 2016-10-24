import React, { Component } from 'react';
import style from '../../styles/article.less';
import FontAwesome from 'react-fontawesome';
import ArticleTitleItem from './articleTitleItem';
import { ContextMenu, MenuItem, ContextMenuLayer } from "react-contextmenu";
import TitleContextMenu from './titleContextMenu';

const Layer = ContextMenuLayer("some_unique_identifier")(ArticleTitleItem);

class ArticleTitlePane extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            articleTitleItems: []
        }
    }

    handlePlusClick(e) {
        this.state.articleTitleItems.push(1);
        this.setState({ articleTitleItems: this.state.articleTitleItems });
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
                <div>
                    {this.state.articleTitleItems.map((x, idx) => {
                        return (
                            <Layer key={`l-${idx}`}>
                                
                            </Layer>
                        );
                    })}
                    <TitleContextMenu />
                </div>
            </div>
        );
    }
}

export default ArticleTitlePane;