import React, { Component } from 'react';
import { Tag, Select } from 'antd';

const Option = Select.Option;

class TagSelect extends Component {

    constructor(props, context) {
        super(props, context);
    }

    initOptions() {
        let children = [];
        let allTags = this.props.allTags;

        allTags && allTags.forEach((tag, idx) => {
            children.push(
                <Option key={tag.name}>
                    {tag.name}
                </Option>
            );
        });

        return children;
    }

    handleChange(value) {
        console.log(`selected ${value}`);
        this.props.changeTags(value);
    }

    handleSearch(value) {
        console.info("serach:", value);
    }

    handleSelect(value, option) {
        console.info("select:", value, option);
    }

    handleDeselect(value) {
        console.info("deselect:", value);
    }

    handleBlur(e) {
        console.info("blur:", e);
    }

    componentWillReceiveProps(nextProps) {
        console.info(nextProps);
    }


    render() {
        console.info(this.props.tags);
        let allTags = this.props.allTags;
        let tagNames = this.props.tags.map(x => {
            return x.name;
        });
        // console.info("tagNames:", tagNames);
        return (
            <Select
                key={this.props.symbol}
                multiple
                style={{ width: 600 }}
                onChange={e => this.handleChange(e)}
                // onSearch={this.handleSearch}
                // onSelect={this.handleSelect}
                // onDeselect={this.handleDeselect}
                // onBlur={this.handleBlur}
                tokenSeparators={[',']}
                defaultValue={tagNames}
                >
                {this.initOptions()}
            </Select>
        );
    }
}

export default TagSelect;