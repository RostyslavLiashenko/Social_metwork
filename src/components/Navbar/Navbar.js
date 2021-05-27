import React, {Fragment} from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = props => {
    return (
        <Fragment>
            <div className={classes.navbar}>
                <nav className={classes.nav}>
                    <div className={classes.item}>
                        <Link className={classes.active} to="/profile">Profile</Link>
                    </div>
                    <div className={classes.item}>
                        <Link to="/dialogs">Messages</Link>
                    </div>
                    <div className={classes.item}>
                        <a href="/users">Users</a>
                    </div>
                    <div className={classes.item}>
                        <a href="#">News</a>
                    </div>
                    <div className={classes.item}>
                        <a href="#">Music</a>
                    </div>
                    <div className={classes.item}>
                        <a href="#">Settings</a>
                    </div>
                </nav>
                <Friends
                    sidebar={props.sidebar}
                />
            </div>

        </Fragment>
    )
}

export default Navbar;