import React from "react";
import {reduxForm} from "redux-form";
import {CreateField, renderCheckbox} from "../Common/FormControls/FormControls";
import {required} from "../../helpers/validators";
import {login} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import classes from './login.module.css';
import {Button} from "@material-ui/core";
import {renderInput} from "../Common/FormControls/FormControls";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={classes.formContainer}>
            <div className={classes.inputBlock}>
                <div className={classes.email}>Email: </div>
                {CreateField(renderInput, [required], {
                    style: {
                    backgroundColor: '#fff',
                    margin: '10px',
                },
                    fullWidth: true,
                    size: 'small',
                    name: "email",
                    variant: "outlined",
                    type: "email",
                    placeholder: "email",
                })}

            </div>
            <div className={classes.inputBlock}>
                <div className={classes.password}>Password: </div>
                {CreateField(renderInput, [required], {
                    style: {
                    backgroundColor: '#fff',
                    margin: '10px'
                },
                    fullWidth: true,
                    size: 'small',
                    name: "password",
                    variant: "outlined",
                    type: "password",
                    placeholder: "password",
                })}
            </div>
            <div className={classes.rememberBlock}>
                {CreateField(renderCheckbox, [], {
                    name: 'rememberMe',
                    label: 'Remember'
                })}
            </div>
            {captchaUrl &&
            <div>
                <img src={captchaUrl} alt="captcha"/>
                <div>
                    {CreateField(renderInput, [required], {
                        name: 'captcha', type: 'text',
                        placeholder: 'symbols from image',
                    } )}
                </div>
            </div>}
            {error && <p className={classes.formSummaryError}>
                {error}
            </p>}
            <div>
                <Button
                    style={{
                        color: '#fff',
                        padding: '7px 20px',
                        margin: '5px',
                        backgroundColor: '#2b3120'
                    }}
                    type='submit'>
                    login
                </Button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login' // a unique name for this form
})(LoginForm);

const Login = ({login, isAuth, user, captchaUrl}) => {
    const addUser = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={classes.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm initialValues={user} captchaUrl={captchaUrl} onSubmit={addUser}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
        user: {
            email: state.auth.email,
            password: localStorage.password,
            rememberMe: !!localStorage.rememberMe
        }
    }
}
export default connect(mapStateToProps, {login})(Login);