import classes from "../Dialogs.module.css";
import { Link } from "react-router-dom";
import React from "react";

const UserItem = (props) => {
    return (
        <div className={`${classes.user}`}>
            <img src={props.photo} alt="user"/>
            <Link to={`/dialogs/${props.id}`}>{props.name}</Link>
        </div>
    )
};
export default UserItem;