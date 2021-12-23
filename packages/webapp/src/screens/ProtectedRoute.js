import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LOGOUT } from "../features/counter/authSlice";
import PropTypes from "prop-types";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const isAuthenticated = this.props.isAuthenticated;
    if (isAuthenticated) {
      return <Component />;
    } else {
      return <Redirect to={{ pathname: "/login" }} />;
    }
  }
}

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    LOGOUT: () => dispatch(LOGOUT()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
