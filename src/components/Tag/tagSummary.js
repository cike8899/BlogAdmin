import React, {Component, PropTypes} from 'react';
import {
    Table,
    Icon,
    Input,
    Dropdown,
    Menu,
    Button
} from 'antd';

import TagOperation from './tagOperation';
import style from './tagStyle.less';

class TagSummary extends Component {
    constructor(props, context) {
        super(props, context);
        this.menus = this.buildMenus();
        this.columns = this.buildCols();
        this.data = this.buildData();
        this.state = {
            tagVal: ""
        };
        this.handleTagInputChange = this
            .handleTagInputChange
            .bind(this);
        this.handleBtnClick = this
            .handleBtnClick
            .bind(this);
        this.handleAllTags = this
            .handleAllTags
            .bind(this);
    }

    buildCols() {
        const columns = [
            {
                title: '标签',
                dataIndex: 'tag',
                key: 'tag',
                render: text => <a href="#">{text}</a>
            }, {
                title: '文章',
                dataIndex: 'article',
                key: 'article'
            }, {
                title: '操作',
                key: 'operation',
                render: (text, record) => (<TagOperation/>)
            }, {
                title: '排序',
                dataIndex: 'sort',
                key: 'sort'
            }
        ];
        return columns;
    }

    buildData() {
        const data = [
            {
                key: '1',
                tag: 'John Brown',
                article: 32,
                sort: 'New York No. 1 Lake Park'
            }, {
                key: '2',
                tag: 'Jim Green',
                article: 42,
                sort: 'London No. 1 Lake Park'
            }, {
                key: '3',
                tag: 'Joe Black',
                article: 32,
                sort: 'Sidney No. 1 Lake Park'
            }
        ];
        return data;
    }

    buildMenus() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
                </Menu.Item>
            </Menu>
        );
        return menu;
    }

    handleBtnClick() {
        let obj = {
            name: this.state.tagVal,
            age: Math.round(Math.random() * 100)
        };
        let val = this
            .props
            .actions
            .addTag(obj);
    }

    handleAllTags() {
        this
            .props
            .actions
            .getAllTags();
    }

    handleTagInputChange(e) {
        this.setState({tagVal: e.target.value});
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.tags !== this.props.tags;
    }

    componentWillUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <div className={style["tag-summary-wrap"]}>
                <Table columns={this.columns} dataSource={this.data} pagination={false}/>
                <div className={style["add-tag-pane"]}>
                    <Input
                        placeholder="请输入标签"
                        className={style["add-tag-textbox"]}
                        onChange={this.handleTagInputChange}/>
                    <Button
                        type="primary"
                        className={style["add-tag-btn"]}
                        onClick={this.handleBtnClick}>添加标签
                    </Button>
                    <Button onClick={this.handleAllTags}>获取所有</Button>
                </div>
            </div>
        );
    }
}

TagSummary.propTypes = {
    actions: PropTypes.object,
    children: PropTypes.node,
    tags: PropTypes.array
}

export default TagSummary;