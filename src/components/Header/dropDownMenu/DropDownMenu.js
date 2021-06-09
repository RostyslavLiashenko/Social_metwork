import React from "react";
import classes from './DropDownMenu.module.css'
import {Link} from "react-router-dom";

const DropDownMenu = ({burgerClick, isOpenMenu}) => {
    return (
        <div className={isOpenMenu ? classes.menu : `${classes.hiddenMenu} ${classes.menu}`} onClick={burgerClick}>
            <div className={classes.blur}></div>
            <div className={classes.menuContent} onClick={event => event.stopPropagation()}>
                <div onClick={burgerClick}>
                    <div className={classes.item}>
                        <Link to="/profile">Profile</Link>
                    </div>
                    <div className={classes.item}>
                        <Link to="/dialogs">Messages</Link>
                    </div>
                    <div className={classes.item}>
                        <Link to="/users">Users</Link>
                    </div>
                    <div className={classes.item}>
                        <Link to="/news">News</Link>
                    </div>
                    <div className={classes.item}>
                        <Link to="/music">Music</Link>
                    </div>
                    <div className={classes.item}>
                        <Link to="/settings">Settings</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DropDownMenu