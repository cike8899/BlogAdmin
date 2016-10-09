import React, {Component} from 'react';
import style from './style.less';

class Tab extends Component {
    render() {
        return (
            <div className={style["tab-title-wrap"]}>
                {this.props.children}
            </div>
        );
    }
}

export default Tab;