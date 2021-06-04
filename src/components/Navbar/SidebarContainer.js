import React from "react";
import Sidebar from "./Sidebar";
import {withRouter} from "react-router";

const SidebarContainer = (props) => {
    const activeUrl = props.history.location.pathname
    return (
        <Sidebar activeUrl={activeUrl}/>
    )
}
export default withRouter(SidebarContainer)