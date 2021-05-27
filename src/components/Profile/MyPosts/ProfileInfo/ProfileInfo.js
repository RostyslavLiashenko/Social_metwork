import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import iconUser from '../../../../assets/users_images/user-male.png'

const ProfileInfo = ({user, status, updateUserStatus}) => {
    if (!user) return <Preloader />
    return (
        <div>
            {/*<img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                 alt="ocean"
                 width="1000px"
                 height="480px"
            />*/}
            <div className={classes.descriptionBlock}>
                <img src={user.photos.large || iconUser} alt="ava photo"/>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                <p>{user.aboutMe}</p>
                <p>{user.lookingForAJob ? "I'm looking for a new job" : "Don't need any job"}</p>
            </div>
        </div>
    )
};
export default ProfileInfo;