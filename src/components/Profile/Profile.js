import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from './Profile.module.css'

const Profile = props => {
    return (
        <div className={classes.profileContainer}>
            <ProfileInfo user={props.user}
                         status={props.status}
                         isOwner={props.isOwner}
                         addPhoto={props.addPhoto}
                         updateUserStatus={props.updateUserStatus}/>
            {props.isOwner ? <MyPostsContainer/> : <h3 className={classes.myPosts}>My posts</h3>}
        </div>
    )
}
export default Profile;