import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoginIndex from '../../components/Login/loginIndex';

class LoginContainer extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        const {users, children} = this.props;
        return (
            <div>
                <LoginIndex users={users} />
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

export default connect(mapStateToProps)(LoginContainer)