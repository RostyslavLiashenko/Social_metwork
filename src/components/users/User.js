import React from 'react';
import classes from './user.module.css'
import userPhoto from '../../assets/users_images/userPhoto.jpg'
import {Link} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div key={user.id} className={classes.user}>
            <div>
                <Link to={`/profile/${user.id}`}>
                    <img src={user.photos.small ? user.photos.small : userPhoto}
                         className={classes.avatar}
                         alt="ava"/>
                </Link>
            </div>
            {user.followed ?
                <button className={`${classes.btn} ${classes.effect01}`}
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id)
                        }}>
                    <span>unfollow</span>
                </button> :
                <button className={`${classes.btn} ${classes.effect01}`}
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id)
                        }}>
                    <span>follow</span>
                </button>
            }
            <div>
                <div className={classes.name}>
                    <b>Name: </b>
                    <span>{user.name}</span>
                </div>
                {user.status && <div><b>Status: </b>{user.status}</div>}
            </div>
        </div>
    )
}

export default User;
