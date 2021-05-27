import classes from "../Dialogs.module.css";
import { Link } from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <Link to={'dialogs/' + props.id}>{props.name}</Link>
        </div>
    )
};
export default DialogItem;