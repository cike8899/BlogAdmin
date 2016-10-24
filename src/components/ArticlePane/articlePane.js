import React, { Component } from 'react';
import style from '../../styles/article.less';
import FontAwesome from 'react-fontawesome';
import Editor from 'react-simplemde-editor';
import ArticleTitleItem from './articleTitlePane';

class componentName extends Component {
    render() {
        return (
            <div className={style["article-pane"]}>
                <ArticleTitleItem />
                <div className={`${style["main-con"]} ${style["article-edit-wrap"]}`}>
                    <div className={style["big-title"]}>新的博客还没发布</div>
                    <div className={style["deputy-wrap"]}>
                        <div className={style["tag-collection"]}>
                            <FontAwesome name="tags" />
                        </div>
                        <div className={style["operate-article-pane"]}>
                            <div className={style["operate-article-div"]}>
                                <div className={style["symbol-pan"]}>
                                    <div className={style["add-tag"]}>
                                        <FontAwesome name="plus" />
                                    </div>
                                    <div className={style["del-tag"]}>
                                        <FontAwesome name="minus" />
                                    </div>
                                </div>
                                <div className={style["btn-pan"]}>
                                    <button className={style["del-draft"]}>删除草稿</button>
                                    <button>发布文章</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style["editor"]}>
                        <Editor
                            options={{
                                status: false
                            }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default componentName;