import React from 'react';
import classes from './user.module.css'
import userPhoto from '../../assets/users_images/userPhoto.jpg'
import {Link} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div key={user.id}>
                <span>
                    <div>
                        <Link to={`/profile/${user.id}`}>
                            <img src={user.photos.small ? user.photos.small : userPhoto}
                                 className={classes.avatar}
                                 alt="ava"/>
                         </Link>
                    </div>
                </span>
            <span>
                {!user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>follow</button> :
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                }}>unfollow</button>}
            </span>
            <span>
                <span>
                    <div>{user.name}</div><div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div><div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    )
}

export default User;
