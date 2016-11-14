import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Editor from 'react-simplemde-editor';
import style from '../../styles/article.less';

class ArticleEditWrap extends Component {
    constructor(props, context) {
        super(props, context);
        this.content = "";
        this.state = {
            isTitleFocus: false
        }
    }


    handleArticleTitleChange(e) {
        console.info(e);
    }

    handleArticleTitleFocus(e) {
        this.setState({ isTitleFocus: true });
    }

    handleArticleTitleBlur(e) {
        this.setState({ isTitleFocus: false });
    }

    getTitleInputStyle() {
        let sty = style["article-title-input"];
        if (!this.state.isTitleFocus) {
            sty = style["article-title-input"] + ' ' + style["article-title-input-blur"];
        }
        return sty;
    }

    handleEditorChange(e) {
        this.content = e;
    }

    publishArticle() {
        let title = this.refs.articleTitle.value.trim();
        let content = this.content;
        this.props.actions.addOrUpdateNote({ title, content });
    }


    componentWillMount() {
        this.props.actions.getNotesByPage(1);
    }


    render() {
        const {title, content, tags } = this.props
        return (
            <div className={`${style["main-con"]} ${style["article-edit-wrap"]}`}>
                <div className={style["big-title"]}>
                    <input defaultValue={'哈哈哈' + title} className={this.getTitleInputStyle()}
                        ref={"articleTitle"}
                        onChange={(e) => { this.handleArticleTitleChange(e) } }
                        onFocus={(e) => { this.handleArticleTitleFocus(e) } }
                        onBlur={(e) => { this.handleArticleTitleBlur(e) } }
                        />
                </div>
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
                                <button onClick={(e) => { this.publishArticle(e) } }>发布文章</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style["editor"]}>
                    <Editor
                        options={{
                            status: false,
                            value: content
                        }} onChange={(e) => { this.handleEditorChange(e) } } />
                </div>
            </div>
        );
    }
}

export default ArticleEditWrap;