import React, { Component } from 'react';
import style from '../../styles/article.less';
import FontAwesome from 'react-fontawesome';
import { Popover, Button } from 'antd';
import { ContextMenu, MenuItem, ContextMenuLayer } from 'react-contextmenu';

class ArticleTitleItem extends Component {
    constructor(props, context) {
        super(props, context);

    }


    handleContextMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        console.info("popup");
    }

    render() {
        return (
            <ul className={style["new-article-item"]}>
                <li>
                    <div className={style["single-article-item"]}>
                        <div className={style["article-sinpper-title"]}>新博客还没完成</div>
                        <div className={style["edit-article-time"]}>2016-10-04 22:38</div>
                    </div>
                </li>
            </ul>
        );
    }
}

export default ArticleTitleItem;