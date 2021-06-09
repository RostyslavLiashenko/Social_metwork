import React from "react";
import classes from "../Dialogs.module.css";
import {Link} from "react-router-dom";

const UserItem = ({id, photo, name}) => {
    return (
        <Link to={`/dialogs/${id}`} className={classes.user}>
            <img src={photo} alt="user"/>
            <span>{name}</span>
        </Link>
    )
};
export default UserItem;