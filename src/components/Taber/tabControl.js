import React, {Component} from 'react';
import style from './style.less';
import FontAwesome from 'react-fontawesome';
import articleStyle from '../../styles/article.less';

class TabsControl extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentIndex: 0
        };
    }

    getTitleItemCssClasses(index) {
        return index === this.state.currentIndex
            ? `${articleStyle["icon-container"]} ${articleStyle["active"]}`
            : articleStyle["icon-container"];
    }

    //style["tab-content-item active"] 直接这么写 className显示不了
    getContentItemCssClasses(index) {
        return index === this.state.currentIndex
            ? `${style["tab-content-item"]} ${style["active"]}`
            : style["tab-content-item"];
    }

    render() {
        let that = this;
        let {baseWidth} = this.props;
        let childrenLength = this.props.children.length;

        return (
            <div className={articleStyle["main-wrap"]}>
                <div className={`${articleStyle["main-con"]} ${articleStyle["side-bar-wrap"]}`}>
                    {React
                        .Children
                        .map(this.props.children, (ele, idx) => {
                            return (
                                <div
                                    className={that.getTitleItemCssClasses(idx)}
                                    onClick={() => {
                                    this.setState({currentIndex: idx})
                                }}>
                                    <FontAwesome name={ele.props.name}/>
                                </div>
                            );
                        })}
                </div>
                <div className={style["tab-content-wrap"]}>
                    {React
                        .Children
                        .map(this.props.children, (ele, idx) => {
                            return (
                                <div className={this.getContentItemCssClasses(idx)}>
                                    {ele}
                                </div>
                            )
                        })}
                </div>
            </div>
        );
    }
}

export default TabsControl;