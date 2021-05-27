import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reducer";

class HeaderContainer extends Component {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isFetching: state.auth.isFetching,
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)