import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoginIndex from '../../components/Login/loginIndex';
import * as userActions from '../../actions/users';

class LoginContainer extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        const {users, children, userActions} = this.props;
        return (
            <div>
                <LoginIndex users={users} userActions={userActions} />
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
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)