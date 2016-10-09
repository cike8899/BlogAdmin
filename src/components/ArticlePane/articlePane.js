import React, {Component} from 'react';
import style from '../../styles/article.less';
import FontAwesome from 'react-fontawesome';
import Editor from 'react-simplemde-editor';

class componentName extends Component {
    render() {
        return (
            <div className={style["article-pane"]}>
                <div className={`${style["main-con"]} ${style["article-list-wrap"]}`}>
                    <div className={style["edit-article-title"]}>
                        <span className={style["edit-article-title-inner-left"]}>
                            <FontAwesome name="file-text"/>
                            <span className={style["edit-article-title-text"]}>文章列表</span>
                        </span>
                        <span className={style["edit-article-title-inner-right"]}>
                            <FontAwesome name="plus"/>
                        </span>
                    </div>
                    <div>
                        <ul className={style["new-article-item"]}>
                            <li>
                                <div className={style["single-article-item"]}>
                                    <div className={style["article-sinpper-title"]}>新博客还没完成</div>
                                    <div className={style["edit-article-time"]}>2016-10-04 22:38</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`${style["main-con"]} ${style["article-edit-wrap"]}`}>
                    <div className={style["big-title"]}>新的博客还没发布</div>
                    <div className={style["deputy-wrap"]}>
                        <div className={style["tag-collection"]}>
                            <FontAwesome name="tags"/>
                        </div>
                        <div className={style["operate-article-pane"]}>
                            <div className={style["operate-article-div"]}>
                                <div className={style["symbol-pan"]}>
                                    <div className={style["add-tag"]}>
                                        <FontAwesome name="plus"/>
                                    </div>
                                    <div className={style["del-tag"]}>
                                        <FontAwesome name="minus"/>
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
                        }}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default componentName;