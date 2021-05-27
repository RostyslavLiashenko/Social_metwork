import React from 'react';
import classes from "../Dialogs.module.css";

const message = props => {
    return (
        <div className={classes.message} id={props.id}>{props.msg}</div>
    )
}

export default message;