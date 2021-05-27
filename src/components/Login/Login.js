import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, CreateField} from "../Common/FormControls/FormControls";
import {required} from "../../helpers/validators";
import {login} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import classes from './login.module.css';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField(Input, [required], 'email', 'email', 'email')}
            {CreateField(Input, [required], 'password', 'password', 'password')}
            <div>
                <Field component={Input}
                       name={'rememberMe'}
                       id={'remember'}
                       type="checkbox"/>
                <label htmlFor="remember">remember</label>
            </div>
            {error && <p className={classes.formSummaryError}>
                {error}
            </p>}
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login' // a unique name for this form
})(LoginForm);

const Login = ({login, isAuth}) => {
    const addUser = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={addUser}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login);