import React from "react";
import {CreateField, Input, Textarea} from "../../../Common/FormControls/FormControls";
import {required} from "../../../../helpers/validators";
import {reduxForm} from "redux-form";
import classes from './ProfileInfo.module.css';

const ProfileDataForm = ({handleSubmit, user, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {error && <p className={classes.formSummaryError}>
                {error}
            </p>}
            <div>
                <b>Full name:</b>
                {CreateField(Input, [required], 'fullName', 'text', 'type your name')}
            </div>
            <div>
                <b>I'm looking for a new job:</b>
                {CreateField(Input, [], 'lookingForAJob', 'checkbox', '')}
            </div>
            <div>
                <b>About me:</b>
                {CreateField(Input, [], 'aboutMe', 'text', 'About me')}
            </div>
            <div>
                <b>Looking for a job description:</b>
                {CreateField(Textarea, [], 'lookingForAJobDescription', 'text', 'description')}
            </div>
            {Object.keys(user.contacts).map(key => {
                return <div className={classes.contact} key={key}>
                    <b>{key}:</b> {CreateField(Input, [], `contacts.${key}`, 'text', `${key}`)}
                </div>
            })}
        </form>
    )
}

const ProfileDataFormRedux = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormRedux