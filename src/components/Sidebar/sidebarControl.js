import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import style from '../../styles/article.less';

class SidebarControl extends Component {
    render() {
        return (
            <div className={`${style["main-con"]} ${style["side-bar-wrap"]}`}>
                <div className={style["icon-container"]}>
                    <FontAwesome name="globe" className={style["article-icon-globe"]}/>
                </div>
                <div className={style["icon-container"]}>
                    <FontAwesome name="file-text"/>
                </div>
                <div className={style["icon-container"]}>
                    <FontAwesome name="tags"/>
                </div>
                <div className={style["icon-container"]}>
                    <FontAwesome name="user"/>
                </div>
                <div
                    className={`${style["icon-container"]} ${style["icon-sign-out-container"]}`}>
                    <FontAwesome name="sign-out" className={style["article-icon-sign-out"]}/>
                </div>
            </div>
        );
    }
}

export default SidebarControl;