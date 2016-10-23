/*global _*/

import React, { Component } from 'react';

class TagOperation extends Component {
    constructor(props, context) {
        super(props, context);
        this.record = this.props.record;
        this.actions = this.props.actions;
        this.tags = this.props.tags[0];
        this.pagination = this.props.pagination;
    }

    handleDelClick(e) {
        e.preventDefault();
        e.stopPropagation();
        let id = e.currentTarget.getAttribute("data-id");
        let data = {
            id: Number(id),
            current: this.props.pagination.current,
            currentCount: this.props.tags[0].rows ? this.props.tags[0].rows.length : 0,
            countPerPage: this.props.pagination.pageSize
        };
        this.props.actions.delTagById(data);
        console.info(e);
    }

    render() {
        return (
            <div className="tag-operation-wrap">
                <a>编辑</a>
                |
                <a onClick={(e) => { this.handleDelClick(e) } } data-id={this.props.record.id}>删除</a>
                <br />
                <a>显示</a>
                |
                <a>隐藏</a>
            </div>
        );
    }
}

export default TagOperation;