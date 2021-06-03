import React from "react";
import Settings from "./Settings";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {addPhoto, getProfile, saveProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router";

const SettingsContainer = (props) => {
    return (
        <Settings
            {...props}
            path={props.history.location.pathname}
            user={props.user}
            saveProfile={props.saveProfile}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.profilePage.user,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export default compose(connect(mapStateToProps,
    {getProfile, addPhoto, saveProfile}), withAuthRedirect, withRouter)(SettingsContainer)
