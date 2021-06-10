import React from 'react';
import classes from "../Dialogs.module.css";
import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete"

const Message = (props) => {
    return (
        <div className={classes.message}>
            <span>{props.numMsg + 1}. {props.messages}</span>
            <IconButton
                style={{
                    padding: "1px 5px 5px 7px"
                }}
                aria-label="delete"
                onClick={() => props.deleteMessage(props.numMsg, props.userId)}>
                <DeleteIcon fontSize="small"/>
            </IconButton >
        </div>
    )
}

export default Message;