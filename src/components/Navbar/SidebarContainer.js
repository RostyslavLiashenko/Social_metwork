import React from "react";
import Sidebar from "./Sidebar";
import {compose} from "redux";
import {withRouter} from "react-router";
import {connect} from "react-redux";

const SidebarContainer = (props) => {
    const activeUrl = props.history.location.pathname
    return (
        <Sidebar friends={props.friends}
                 activeUrl={activeUrl}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        friends: state.sidebarPage.friends,
    }
}

export default compose(connect(mapStateToProps), withRouter)(SidebarContainer)