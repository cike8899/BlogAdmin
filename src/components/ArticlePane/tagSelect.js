import React, { Component } from 'react';
import { Tag, Select } from 'antd';

const Option = Select.Option;

class TagSelect extends Component {

    children = [];

    constructor(props, context) {
        super(props, context);
        this.initOptions();
    }

    initOptions() {
        for (let i = 10; i < 36; i++) {
            this.children.push(
                <Option key={i.toString(36) + i}>
                    {i.toString(36) + i}
                </Option>
            );
        }
    }

    handleChange(value) {
        console.log(`selected ${value}`);
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

    render() {
        return (
            <Select
                tags
                style={{ width: 600 }}
                onChange={this.handleChange}
                onSearch={this.handleSearch}
                onSelect={this.handleSelect}
                onDeselect={this.handleDeselect}
                onBlur={this.handleBlur}
                tokenSeparators={[',']}
                >
                {this.children}
            </Select>
        );
    }
}

export default TagSelect;