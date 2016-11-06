import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';
import style from './login.less';

class LoginIndex extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            modalVisible: false,
            username: "",
            pwd: ""
        }
    }

    setModalVisible() {
        this.setState({ modalVisible: true });
    }

    handleOkBtn(e) {
        console.info(e);
    }

    handleCancleBtn(e) {

    }

    handleUsernameChange(e) {
        // this.setState({username:});
        console.info("handleUsernameChange:", e);
        let value = e.target.value;
        this.setState({ username: value });
    }

    handlePwdChange(e) {
        let value = e.target.value;
        console.info("handlePwdChange:", e);
        this.setState({ pwd: value });
    }

    render() {
        return (
            <div>
                <Modal
                    title="登录"
                    wrapClassName="vertical-center-modal"
                    visible={true}
                    closable={false}
                    onOk={(e) => this.handleOkBtn(e)}
                    onCancel={(e) => this.handleCancleBtn(e)}
                    >
                    <ul className={style["login-item-wrap"]}>
                        <li>
                            <span className={style["username-label"]}>用户名</span>
                            <Input placeholder={"请输入用户名..."} className={style["username-textbox"]}
                                onChange={(e) => { this.handleUsernameChange(e) } } />
                        </li>
                        <li>
                            <span className={style["pwd-label"]}>密码</span>
                            <Input placeholder={"请输入密码..."} className={style["pwd-textbox"]}
                                onChange={(e) => { this.handlePwdChange(e) } }
                                />
                        </li>
                    </ul>
                </Modal>
            </div>
        );
    }
}

export default LoginIndex;