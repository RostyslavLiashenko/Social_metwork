import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    requestUsers
} from "../../Redux/Users-reducer";
import Users from "./Users";
import Preloader from '../Common/Preloader/Preloader';
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageNeighbours,
    getTotalUsers,
    getUsersPerPage,
    getUsersSelector,
} from "../../Redux/users-selectors";

class UsersClass extends React.Component {
    componentDidMount() {
        const {requestUsers, currentPage, itemsPerPage} = this.props
        requestUsers(currentPage, itemsPerPage)
    }
    onPageChange = (page) => {
        const {requestUsers, itemsPerPage} = this.props
        requestUsers(page, itemsPerPage)
    }
    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <Users
                    totalItemsCount={this.props.totalItemsCount}
                    itemsPerPage={this.props.itemsPerPage}
                    onPageChange={this.onPageChange}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                    portionSize={this.props.portionSize}
                />
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        itemsPerPage: getUsersPerPage(state),
        totalItemsCount: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPageNeighbours(state)
    }
}

export default compose(connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingInProgress, requestUsers
}))(UsersClass)
