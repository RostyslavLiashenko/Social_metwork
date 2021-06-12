import {userAPI} from "../api/api";
import {updateObjectInArray} from "../helpers/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IN_PROGRESS = 'TOGGLE_IN_PROGRESS';

const initialState = {
    users: [],
    itemsPerPage: 10,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    portionSize: 10,
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case (FOLLOW) : {
            return updateObjectInArray(state, action, {followed: true})
        }
        case (UNFOLLOW) : {
            return updateObjectInArray(state, action, {followed: false})
        }
        case (SET_USERS) : {
            return {
                ...state,
                users: action.users
            }
        }
        case (SET_CURRENT_PAGE) : {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case (SET_TOTAL_USERS_COUNT) : {
            return {
                ...state,
                totalItemsCount: action.totalCount,
            }
        }
        case (TOGGLE_IS_FETCHING) : {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case (TOGGLE_IN_PROGRESS) : {
            return {
                ...state,
                followingInProgress: action.isFollowing ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}
export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFollowing, userId) => ({type: TOGGLE_IN_PROGRESS, isFollowing, userId})

export const requestUsers = (currentPage, usersPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        userAPI.getUsers(currentPage, usersPage)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
}

export const followUnfollowFlow = async (userId, apiMethod, actionCreator, dispatch) => {
        const data = await apiMethod(userId)
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
}
export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        await followUnfollowFlow(userId, userAPI.follow.bind(userAPI), followSuccess, dispatch)
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        await followUnfollowFlow(userId, userAPI.unfollow.bind(userAPI), unfollowSuccess, dispatch)
    }
}
export default usersReducer;