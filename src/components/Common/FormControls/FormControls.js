import React from 'react'
import classes from './FormControls.module.css';
import {Field} from "redux-form";
import {TextField, Checkbox, FormControlLabel} from "@material-ui/core";

export const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={classes.block}>
            <div className={hasError ? classes.formControl : ''}>
                {children}
            </div>
            {hasError &&
            <div className={classes.error}>
                {error}
            </div>}
        </div>
    )
}

export const renderInput = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><TextField style={{marginBottom: '10px', ...input.style}} {...input} {...restProps}/></FormControl>
}
export const renderCheckbox = ({input, label}) => (
    <div>
        <FormControlLabel
            control={
                <Checkbox
                    checked={!!input.value}
                    onChange={input.onChange}
                    style={input.style}
                />
            }
            label={label}
        />
    </div>
)
export const CreateField = (component, validate, props) => {
    return (
        <>
            <Field
                component={component}
                validate={validate}
                {...props}
            />
        </>
    )
}
