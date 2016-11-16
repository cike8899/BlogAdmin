import React, { Component } from 'react';
import style from '../../styles/article.less';

import ArticleTitlePane from './articleTitlePane';
// import ArticleEditWrap from './articleEditWrap';
import ArticleEditContainer from '../../containers/Backend/articleEditContainer';

class ArticlePane extends Component {

    render() {
        return (
            <div className={style["article-pane"]}>
                <ArticleTitlePane actions={this.props.actions} notes={this.props.notes} />
                <ArticleEditContainer />
            </div>
        );
    }
}

export default ArticlePane;