import React, {useState} from "react";
import classes from './Settings.module.css';
import Preloader from "../Common/Preloader/Preloader";
import ProfileDataFormRedux from "../Profile/MyPosts/ProfileInfo/ProfileDataForm";

const Settings = ({user, saveProfile, path}) => {
    const [editMode, setEditMode] = useState(false)
    if (!user) return <Preloader/>
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }
    return (
        <div>
            {editMode ? <ProfileDataFormRedux initialValues={user} user={user} onSubmit={onSubmit}/>
                : <ProfileData user={user} path={path} goToEditMode={() => setEditMode(true)}/>}
        </div>
    )
}
export const ProfileData = ({user, goToEditMode, path}) => {
    let some = Object.entries(user.contacts).map(([key, value]) => {
        return (<div className={classes.contact} key={key}>
            <b>{key}:</b> {value}
        </div>)
    })
    return (
        <div className={classes.aboutMe}>
            {user.userId === 16749 && path === '/settings' && <div>
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
export default Settings;