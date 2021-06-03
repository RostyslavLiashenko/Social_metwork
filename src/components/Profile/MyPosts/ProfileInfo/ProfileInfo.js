import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import iconUser from '../../../../assets/users_images/userPhoto.jpg'
import {ProfileData} from "../../../Settings/Settings";


const ProfileInfo = ({user, status, updateUserStatus, isOwner, addPhoto}) => {
    if (!user) return <Preloader/>
    const onMainPhotoChange = (e) => {
        if (e.target.files.length) {
            addPhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={user.photos.large ?? user.photos ?? iconUser} alt="avatar"/>
                {isOwner && <div>
                    <input type="file" onChange={onMainPhotoChange}/>
                </div>}
                <ProfileStatus isOwner={isOwner} status={status} updateUserStatus={updateUserStatus}/>
                <ProfileData user={user}/>
            </div>
        </div>
    )
};

export default ProfileInfo;