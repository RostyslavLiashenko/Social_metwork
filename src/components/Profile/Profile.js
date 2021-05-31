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
                         saveProfile={props.saveProfile}
                         updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;