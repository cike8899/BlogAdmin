import React, { Component } from 'react';
import style from '../../styles/article.less';
import FontAwesome from 'react-fontawesome';
import { Popover, Button } from 'antd';
import { ContextMenu, MenuItem, ContextMenuLayer } from 'react-contextmenu';

class ArticleTitleItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.getArticleItemStyle = this.getArticleItemStyle.bind(this);
    }

    handleContextMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        console.info("popup");
    }

    handleItemClick(e) {
        this.props.handleClick(this.props.note.id);
    }

    getArticleItemStyle() {
        let sty;
        if (this.props.note.title === "") {
            sty = style["single-article-item"] + " " + style["single-article-item-blank"];
        } else {
            sty = style["single-article-item"];
        }
        return sty;
    }

    render() {
        let note = this.props.note;
        return (
            <ul className={this.props.sty} onClick={(e) => { this.handleItemClick(e) } }>
                <li>
                    <div className={this.getArticleItemStyle()}>
                        <div className={style["article-sinpper-title"]}>{note.title}</div>
                        <div className={style["edit-article-time"]}>{note.updatedAt}</div>
                    </div>
                </li>
            </ul>
        );
    }
}

export default ArticleTitleItem;