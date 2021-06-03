import React from 'react';
import classes from "../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={classes.message}>
            <span>{props.numMsg + 1}. {props.messages}</span>
            <button onClick={() => props.deleteMessage(props.numMsg, props.userId)}>X</button>
        </div>
    )
}

export default Message;