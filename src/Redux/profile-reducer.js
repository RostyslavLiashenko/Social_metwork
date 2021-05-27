import {profileApi} from "../api/api";
import userIcon from '../assets/users_images/user-male.png'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_USER = 'DELETE_USER'

const initialState = {
    userPosts: [
        {message: "Hi, how are you ?", likes: 15, id: 10, photo: userIcon},
        {message: "It's my first post", likes: 20, id: 15, photo: userIcon},
    ],
    user: null,
    status: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_POST) : {
            return {
                ...state,
                userPosts: [...state.userPosts, {message: action.newText, likes: 25, id: 20, photo: userIcon}],
            }
        }
        case (SET_USER_PROFILE) : {
            return {
                ...state,
                user: action.user,
            }
        }
        case (SET_STATUS) : {
            return {
                ...state,
                status: action.status
            }
        }
        case (DELETE_USER) : {
            return {
                ...state,
                userPosts: [...state.userPosts].filter(el => el.id !== action.postId)
            }
        }
        default:
            return state
    }
}

export const addPostCreator = (newText) => ({type: ADD_POST, newText})
export const deletePostCreator = (postId) => ({type: DELETE_USER, postId})
export const setUserProfile = (user) => ({type: SET_USER_PROFILE, user})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => {
    return async (dispatch) => {
        const data = await profileApi.getProfile(userId)
        dispatch(setUserProfile(data))
    }
}
export const getUserStatus = (userID) => {
    return async (dispatch) => {
        const res = await profileApi.getStatus(userID)
        dispatch(setStatus(res.data))
    }
}
export const updateUserStatus = (status, userId) => {
    return (dispatch) => {
        profileApi.updateStatus(status, userId).then(res => {
        if (res.data.resultCode === 0)
            dispatch(setStatus(status))})
    }
}
export default profileReducer;

