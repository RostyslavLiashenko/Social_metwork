import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import iconUser from '../../../../assets/users_images/userPhoto.jpg'
import {ProfileData} from "../../../Settings/Settings";
import {Button} from "@material-ui/core";
import {PhotoCamera} from "@material-ui/icons";

const ProfileInfo = ({user, status, updateUserStatus, isOwner, addPhoto}) => {
    if (!user) return <Preloader/>
    const onMainPhotoChange = (e) => {
        if (e.target.files.length) {
            addPhoto(e.target.files[0])
        }
    }
    return (
        <div className={classes.descriptionBlock}>
            <div>
                <img src={user.photos.large ?? user.photos ?? iconUser}
                     className={classes.userPhoto}
                     alt="avatar"/>
            </div>
            {isOwner &&
            <div style={{margin: '10px 60px'}}>
                <input
                    color="primary"
                    accept="image/*"
                    type="file"
                    onChange={onMainPhotoChange}
                    id="icon-button-file"
                    style={{display: 'none',}}
                />
                <label htmlFor="icon-button-file">
                    <Button
                        variant="contained"
                        component="span"
                        style={{
                            color: '#fff',
                            backgroundColor: '#2b3120'
                        }}
                        startIcon={<PhotoCamera/>}
                        size="large"
                    >
                        Upload photo
                    </Button>
                </label>
            </div>
                /*<div className={classes.buttonWrapper}>
                    <span className={classes.label}>
                        Upload File
                    </span>
                    <input type="file" name="upload" onChange={onMainPhotoChange}
                           className={classes.uploadBox} placeholder="Upload File"/>
                </div>*/
            }
            <ProfileStatus isOwner={isOwner} status={status} updateUserStatus={updateUserStatus}/>
            <ProfileData user={user}/>
        </div>
    )
};
export default ProfileInfo;