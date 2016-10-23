/*global _*/

import React, { Component } from 'react';

class TagOperation extends Component {
    constructor(props, context) {
        super(props, context);
        this.record = this.props.record;
        this.actions = this.props.actions;
        this.pagination = this.props.pagination;
    }

    handleDelClick(e) {
        e.preventDefault();
        e.stopPropagation();
        let id = e.currentTarget.getAttrbute("data-id");
        let data = { id: Number(id), current: 3, currentCount: 4, countPerPage: 5 };
        this.actions.delTagById();
        console.info(e);
    }

    render() {
        return (
            <div className="tag-operation-wrap">
                <a>编辑</a>
                |
                <a onClick={(e) => { this.handleDelClick(e) } } data-id={this.record.id}>删除</a>
                <br />
                <a>显示</a>
                |
                <a>隐藏</a>
            </div>
        );
    }
}

export default TagOperation;