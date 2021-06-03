import React, {Fragment} from 'react';
import classes from './Sidebar.module.css';
import {Link} from 'react-router-dom';
import Friends from './Friends/Friends';
import profileIcon from '../../assets/users_images/userPhoto.jpg'
import messageIcon from '../../assets/sidebar/email.jpg'
import usersIcon from '../../assets/sidebar/users.png'
import newsIcon from '../../assets/sidebar/news.png'
import musicIcon from '../../assets/sidebar/music.png'
import settingsIcon from '../../assets/sidebar/settings.png'

const Sidebar = ({friends, activeUrl}) => {
    return (
        <Fragment>
            <div className={classes.sidebar}>
                <nav>
                    <Link className={activeUrl === '/profile' ? `${classes.item} ${classes.active}` : `${classes.item}`} to="/profile">
                        <div className={classes.itemContainer}>
                            <img className={classes.sidebarIcon} src={profileIcon} alt="profile"/>
                            <span>Profile</span>
                        </div>
                    </Link>
                    <Link className={activeUrl === '/dialogs' ? `${classes.item} ${classes.active}` : `${classes.item}`} to="/dialogs">
                        <div className={classes.itemContainer}>
                            <img className={classes.sidebarIcon} src={messageIcon} alt="messages"/>
                            <span>Messages</span>
                        </div>
                    </Link>
                    <Link className={activeUrl === '/users' ? `${classes.item} ${classes.active}` : `${classes.item}`} to="/users">
                        <div className={classes.itemContainer}>
                            <img className={classes.sidebarIcon} src={usersIcon} alt="users"/>
                            <span>Users</span>
                        </div>
                    </Link>
                    <Link className={activeUrl === '/news' ? `${classes.item} ${classes.active}` : `${classes.item}`} to="/news">
                        <div className={classes.itemContainer}>
                            <img className={classes.sidebarIcon} src={newsIcon} alt="news"/>
                            <span>News</span>
                        </div>
                    </Link>
                    <Link className={activeUrl === '/music' ? `${classes.item} ${classes.active}` : `${classes.item}`} to="/music">
                        <div className={classes.itemContainer}>
                            <img className={classes.sidebarIcon} src={musicIcon} alt="music"/>
                            <span>Music</span>
                        </div>
                    </Link>
                    <Link className={activeUrl === '/settings' ? `${classes.item} ${classes.active}` : `${classes.item}`}
                          to="/settings">
                        <div className={classes.itemContainer}>
                            <img className={classes.sidebarIcon} src={settingsIcon} alt="settings"/>
                            <span>Settings</span>
                        </div>
                    </Link>
                </nav>
                <Friends friends={friends}/>
            </div>
        </Fragment>
    )
}

export default Sidebar;