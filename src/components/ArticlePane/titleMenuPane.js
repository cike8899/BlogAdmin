import React, { Component } from 'react';
import curStyle from './titleMenuPane.less';

class TitleMenuPane extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div className={this.props.className}>
                <ul>
                    <li className={curStyle["del-article-item"]}>删除文章</li>
                </ul>
            </div>
        );
    }
}

export default TitleMenuPane;