import React, {Component} from 'react';

class componentName extends Component {
    render() {
        return (
            <div className="tag-operation-wrap">
                <a>编辑</a>
                |
                <a>删除</a>
                <br/>
                <a>显示</a>
                |
                <a>隐藏</a>
            </div>
        );
    }
}

export default componentName;