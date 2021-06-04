import classes from "../Dialogs.module.css";
import { Link } from "react-router-dom";
import React from "react";

const UserItem = (props) => {
    return (
        <Link to={`/dialogs/${props.id}`} className={`${classes.user}`}>
            <img src={props.photo} alt="user"/>
            <span>{props.name}</span>
        </Link>
    )
};
export default UserItem;