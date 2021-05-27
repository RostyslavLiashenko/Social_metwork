import React from 'react';
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";

const Users = (props) => {
    return (
        <div>
            <Pagination
                totalItemsCount={props.totalItemsCount}
                itemsPerPage={props.itemsPerPage}
                currentPage={props.currentPage}
                onPageChange={props.onPageChange}
                portionSize={props.portionSize}
            />
            {props.users.map(user => <User
                    user={user}
                    followingInProgress={props.followingInProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />)}
        </div>
    )
}

export default Users;
