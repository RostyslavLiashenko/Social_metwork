import React from "react";
import {CreateField, Input, Textarea} from "../Common/FormControls/FormControls";
import {required} from "../../helpers/validators";
import {reduxForm} from "redux-form";
import classes from './Settings.module.css';
import s from '../Dialogs/Dialogs.module.css'
import {Button} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'

const ProfileDataForm = ({handleSubmit, user, error}) => {
    return (
        <form onSubmit={handleSubmit} className={classes.aboutMe}>
            {error &&
            <p className={classes.formSummaryError}>
                {error}
            </p>}
            <div>
                <span>Full name:</span>
                {CreateField(Input, [required], 'fullName', 'text', 'type your name', `${s.form}`)}
            </div>
            <div className={classes.checkBox}>
                <span>I'm looking <br/>for a new job:</span>
                {CreateField(Input, [], 'lookingForAJob', 'checkbox', '')}
            </div>
            <div>
                <span>About me:</span>
                {CreateField(Input, [], 'aboutMe', 'text', 'About me', `${s.form}`)}
            </div>
            <div>
                <span>Looking for a job description:</span>
                {CreateField(Textarea, [], 'lookingForAJobDescription', 'text', 'description', `${s.form}`)}
            </div>
            {Object.keys(user.contacts).map(key => {
                return <div className={classes.contact} key={key}>
                    <span>{key}:</span>
                    {CreateField(Input, [], `contacts.${key}`, 'text', `${key}`, `${s.form}`)}
                </div>
            })}
            <div>
                <Button
                    variant="contained"
                    style={{
                        textTransform: 'lowercase',
                        backgroundColor: '#2b3120',
                        color: '#fff',
                        fontSize: '.95em',
                        margin: '10px auto'
                    }}
                    type='submit'
                    startIcon={<SaveIcon/>}
                >
                    save
                </Button>
            </div>
        </form>
    )
}

const ProfileDataFormRedux = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormRedux