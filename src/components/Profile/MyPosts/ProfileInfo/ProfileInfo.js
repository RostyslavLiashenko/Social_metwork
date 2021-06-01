import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import iconUser from '../../../../assets/users_images/userPhoto.jpg'
import ProfileDataFormRedux from "./ProfileDataForm";

const ProfileInfo = ({user, status, updateUserStatus, isOwner, addPhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false)
    if (!user) return <Preloader/>
    const onMainPhotoChange = (e) => {
        if (e.target.files.length) {
            addPhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={user.photos.large ?? user.photos ?? iconUser} alt="avatar"/>
                {isOwner && <div>
                    <input type="file" onChange={onMainPhotoChange}/>
                </div>}
                {editMode ? <ProfileDataFormRedux initialValues={user} user={user} onSubmit={onSubmit}/>
                    : <ProfileData isOwner={isOwner} user={user} goToEditMode={() => setEditMode(true)}/>}
                <ProfileStatus isOwner={isOwner} status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    )
};

export const ProfileData = ({user, isOwner, goToEditMode}) => {
    let some = Object.entries(user.contacts).map(([key, value]) => {
        return (<div className={classes.contact} key={key}>
                            <b>{key}:</b> {value}
                       </div>)
    })
    return (
        <div className={classes.aboutMe}>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <p>Information: {user.aboutMe}</p>
            <div>
                <b>Full name: </b>{user.fullName}
            </div>
            <div>
                <b>About me: </b>{user.aboutMe}
            </div>
            <div>
                <b>I'm looking for a new job: </b>{user.lookingForAJobDescription}
            </div>
            <div className={classes.contacts}>Contacts: <br/>
                {some}
            </div>
        </div>
    )
}

export default ProfileInfo;