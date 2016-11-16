import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Editor from 'react-simplemde-editor';
import style from '../../styles/article.less';

class ArticleEditWrap extends Component {
    constructor(props, context) {
        super(props, context);
        this.content = "";
        this.state = {
            isTitleFocus: false,
            note: {
                content: "",
                createdAt: "",
                id: 0,
                tags: [],
                title: "",
                updatedAt: ""
            }
        }
    }


    handleArticleTitleChange(e) {
        this.state.note.title = e.target.value;
        this.setState({ note: this.state.note })
    }

    handleArticleTitleFocus(e) {
        this.setState({ isTitleFocus: true });
    }

    handleArticleTitleBlur(e) {
        this.props.notesActions.updateNoteTitle(this.state.note);
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
        this.state.note.content = e;
        // this.setState({ note: this.state });
    }

    handleEditorBlur(e) {
        console.info("handleEditorBlur");
    }

    publishArticle() {
        // let title = this.refs.articleTitle.value.trim();
        // let content = this.content;
        // this.props.notesActions.addOrUpdateNote({ title, content });
        console.info(this.state.note);
    }

    saveArticle(e) {
        this.props.notesActions.addOrUpdateNote(this.state.note);
    }

    componentWillMount() {
        // this.props.actions.getNotesByPage(1);
    }

    componentWillReceiveProps(nextProps) {
        // console.info(nextProps.note, this.props.note);
        this.setState({ note: nextProps.note });
    }

    render() {
        // const note = this.props.note;
        return (
            <div className={`${style["main-con"]} ${style["article-edit-wrap"]}`}>
                <div className={style["big-title"]}>
                    <input className={this.getTitleInputStyle()}
                        ref={"articleTitle"} value={this.state.note.title}
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
                                <button className={style["save-draft"]} onClick={(e) => { this.saveArticle(e) } }>保存文章</button>
                                <button onClick={(e) => { this.publishArticle(e) } }>发布文章</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style["editor"]}>
                    <Editor
                        options={{
                            status: false,
                            autofocus: true,
                            spellChecker: true
                        }}
                        value={this.state.note.content}
                        onChange={(e) => { this.handleEditorChange(e) } }
                        onBlur={(e) => { this.handleEditorBlur(e) } }
                        />
                </div>
            </div>
        );
    }
}

export default ArticleEditWrap;