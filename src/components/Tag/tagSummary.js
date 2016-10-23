/*global _*/

import React, { Component, PropTypes } from 'react';
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
        this.pagination = null;
        this.colnePagination = null;
        this.isAddAction = false;
        console.info("tagSummary.js");
        this.props.actions.getTagsByPage();
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
        let that = this;
        const columns = [
            {
                title: '标签',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="#">{text}</a>
            }, {
                title: '文章个数',
                dataIndex: 'noteCount',
                key: 'notesCount'
            },
            {
                title: '创建日期',
                dataIndex: 'createdAt',
                key: 'createdAt'
            },
            {
                title: '修改日期',
                dataIndex: 'updatedAt',
                key: 'updatedAt'
            }, {
                title: '操作',
                key: 'operation',
                render: (text, record) => {
                    console.info(that, this);
                    console.info("text:", text);
                    return (< TagOperation {...this.props} record={record} pagination={this.pagination} />)
                }
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

    buildPagination(nextProps) {
        console.info(this);
        let that = this;
        let total = nextProps.tags[0].count;
        // let remainder = total % 5;
        // let cur;
        // if (remainder !== 0) {
        //     cur = Math.floor(total / 5) + 1;
        // } else {
        //     cur = Math.floor(total / 5);
        // }
        const pagination = {
            total: total,
            showSizeChanger: false,
            pageSize: 5,
            defaultPageSize: 5,
            // defaultCurrent: that.isAddAction ? cur : 1,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize);
            },
            onChange(current) {
                // if (that.pagination) {
                //     that.colnePagination.current = current;
                // }
                that.isAddAction = false;
                that.props.actions.getTagsByPage({ countPerPage: this.defaultPageSize, currentPage: current });
                console.log('Current: ', current);
                that.pagination.current = current;
                // pagination.current = current;
            },
        };
        // if (this.isAddAction) {
        //     pagination.current = cur;
        // }
        return pagination;
    }

    modifyPaginationAfterAddTag(nextProps) {
        let total = nextProps.tags[0].count;
        let oprationType = nextProps.tags[0].operationType;
        let preRows = this.props.tags[0].rows;
        let remainder = total % 5;
        let cur;
        if (oprationType === "add") {
            if (remainder !== 0) {
                cur = Math.floor(total / 5) + 1;
            } else {
                cur = Math.floor(total / 5);
            }
        } else if (oprationType === "del") {
            if (preRows.length === 1) {
                cur = this.pagination.current - 1;
            } else {
                cur = this.pagination.current;
            }
        }

        // if (this.isAddAction) {
        this.pagination.current = cur;
        this.pagination.total = total;
        // }
    }

    handleBtnClick() {
        let obj = {
            name: this.state.tagVal,
            countPerPage: 5,
            preTotal: this.props.tags[0].count
        };
        this.isAddAction = true;
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
        this.setState({ tagVal: e.target.value });
    }

    componentWillReceiveProps(nextProps) {
        if (!this.pagination) {
            this.pagination = this.buildPagination(nextProps);
            this.pagination.current = 1;
        }
        let operationType = nextProps.tags[0].operationType;
        if (operationType && (operationType === "add" || operationType === "del")) {
            this.modifyPaginationAfterAddTag(nextProps);
        }

        console.info("componentWillReceiveProps:", this.props.tags[0]);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.info("shouldComponentUpdate:", this.props.tags[0]);
        return nextProps.tags !== this.props.tags[0];
    }

    componentWillUpdate(nextProps, nextState) {
        console.info("componentWillUpdate:", this.props.tags[0]);
        // this.pagination = this.buildPagination();//在此this.props.tags[0].count拿不到新的props，只有在render的时候才能拿到新的props
        return false;
    }

    componentDidUpdate(prevProps, prevState) {
        console.info("componentDidUpdate:", this.props.tags[0]);
    }


    componentWillMount() {
        console.info("componentWillMount");
    }

    componentDidMount() {
        console.info("componentDidMount");
    }


    render() {
        // if (this.props.tags[0].count) {
        //     if (!this.pagination) {
        //         this.pagination = this.buildPagination();
        //         this.colnePagination = _.cloneDeep(this.pagination);
        //         if (!this.colnePagination.current) {
        //             this.colnePagination.current = 1;
        //         }
        //     }
        // }
        console.info("render");
        return (
            <div className={style["tag-summary-wrap"]}>
                <Table columns={this.columns} dataSource={this.props.tags[0].rows} pagination={this.pagination} loading={false} />
                <div className={style["add-tag-pane"]}>
                    <Input
                        placeholder="请输入标签"
                        className={style["add-tag-textbox"]}
                        onChange={this.handleTagInputChange} />
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