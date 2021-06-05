import React from 'react';
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";
import classes from './user.module.css'

const Users = (props) => {
    return (
        <div className={classes.usersContainer}>
            <Pagination
                totalItemsCount={props.totalItemsCount}
                itemsPerPage={props.itemsPerPage}
                currentPage={props.currentPage}
                onPageChange={props.onPageChange}
                portionSize={props.portionSize}
            />
            {props.users.map(user => <User
                key={user.id}
                user={user}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}
            />)}
        </div>
    )
}

export default Users;
