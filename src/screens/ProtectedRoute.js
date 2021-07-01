
import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { LOGOUT } from '../features/counter/authSlice';

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = this.props.isAuthenticated;
        console.log('Auth status ' + this.props.isAuthenticated);
            if(isAuthenticated) {
                console.log('success');
                return <Component />
            } else {
                console.log('failed');
                return <Redirect to={{ pathname: '/login' }} />
            }
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    token: state.auth.token
});
  
const mapDispatchToProps = dispatch => {
    return {
      LOGOUT: () => dispatch(LOGOUT()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProtectedRoute);