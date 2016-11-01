import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoginIndex from '../../components/Login/loginIndex';

class LoginContainer extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        const {login, children} = this.props;
        return (
            <div>
                <LoginIndex login={login} />
                {children}
            </div>
        );
    }
}

LoginContainer.PropTypes = {
    children: PropTypes.node,
    login: PropTypes.array
}

const mapStateToProps = (state, ownProps) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(LoginContainer)