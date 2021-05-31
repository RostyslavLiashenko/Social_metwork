import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, updateUserStatus, addPhoto, saveProfile} from '../../Redux/profile-reducer'
import {withRouter} from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
        this.refreshProfile()
    }

    render() {
        return (
            <Profile {...this.props}
                     user={this.props.user}
                     status={this.props.status}
                     isOwner={!this.props.match.params.userId}
                     addPhoto={this.props.addPhoto}
                     saveProfile={this.props.saveProfile}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.profilePage.user,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export default compose(connect(mapStateToProps,
    {getProfile, getUserStatus, updateUserStatus, addPhoto, saveProfile}),
    withRouter, withAuthRedirect)(ProfileContainer)
