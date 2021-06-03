import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
    return (
        <div>
            <ProfileInfo user={props.user}
                         status={props.status}
                         isOwner={props.isOwner}
                         addPhoto={props.addPhoto}
                         updateUserStatus={props.updateUserStatus}/>
            {props.isOwner ? <MyPostsContainer/> : <h3>My posts</h3>}
        </div>
    )
}

export default Profile;