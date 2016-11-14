import React, { Component } from 'react';
import style from '../../styles/article.less';

import ArticleTitlePane from './articleTitlePane';
import ArticleEditWrap from './articleEditWrap';

class ArticlePane extends Component {

    render() {
        return (
            <div className={style["article-pane"]}>
                <ArticleTitlePane actions={this.props.actions} notes={this.props.notes} />
                <ArticleEditWrap currentArticle={this.props.currentArticle}
                    notes={this.props.notes} actions={this.props.actions} />
            </div>
        );
    }
}

export default ArticlePane;