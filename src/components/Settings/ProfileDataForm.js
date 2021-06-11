import React from "react";
import {CreateField, renderCheckbox, renderInput} from "../Common/FormControls/FormControls";
import {required} from "../../helpers/validators";
import {Field, reduxForm} from "redux-form";
import classes from './Settings.module.css';
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
                {CreateField(renderInput, [required],
                    {name: 'fullName', type: 'text', placeholder: 'type your name'})}
            </div>
            <div className={classes.checkBox}>
               <Field
                   style={{
                       fontSize: '.9em',
                   }}
                    name='lookingForAJob'
                    label="looking for a job"
                    component={renderCheckbox}
                />
            </div>
            <div>
                <span>About me:</span>
                {CreateField(renderInput, [],
                    {name: 'aboutMe', type: 'text', placeholder: 'about me'})}
            </div>
            <div>
                <span>Looking for a job description:</span>
                {CreateField(renderInput, [],
                    {name: 'lookingForAJobDescription', type: 'text', placeholder: 'description'})}
            </div>
            {Object.keys(user.contacts).map(key => {
                return <div className={classes.contact} key={key}>
                    <span>{key}:</span>
                    {CreateField(renderInput, [],
                        {name: `contacts.${key}`, type: 'text', placeholder: `${key}`})}
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