import React from 'react'
import classes from './FormControls.module.css';
import {Field} from "redux-form";


export const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div>
            <div className={hasError ? classes.formControl : ''}>
                {children}
            </div>
            <div>
                {hasError && <span className={classes.error}>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = props => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = props => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
export const CreateField = (component, validate, name, type, placeholder, classInput= '', props={}) => {
    return (
        <div>
            <Field
                component={component}
                validate={validate}
                name={name}
                type={type}
                placeholder={placeholder}
                className={classInput}
                {...props}
            />
        </div>
    )
}
