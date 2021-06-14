import {profileApi} from "../api/api";
import userIcon from '../assets/users_images/userPhoto.jpg'
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_USER = 'DELETE_USER'
const SET_PHOTO = 'SET_PHOTO'
const TOGGLE_LIKES = 'TOGGLE_LIKES'

const initialState = {
    userPosts: [
        {message: "It's my first post", likes: 31, id: 1, photo: userIcon, liked: false,},
        {message: "Hi, how are you ?", likes: 44, id: 2, photo: userIcon, liked: false,},
        {message: "Just another good day...", likes: 38, id: 3, photo: userIcon, liked: false,},
    ],
    user: null,
    status: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_POST) : {
            return {
                ...state,
                userPosts: [...state.userPosts, {message: action.newText,
                    likes: 0, id: Math.trunc(Math.random() * 100), photo: state.userPosts[0].photo}],
            }
        }
        case (SET_USER_PROFILE) : {
            const newUserPosts = state.userPosts.map(post => ({
                ...post,
                photo: action.user.photos.small
            }))
            return {
                ...state,
                user: action.user,
                userPosts: [...newUserPosts]
            }
        }
        case (SET_STATUS) : {
            return {
                ...state,
                status: action.status,
            }
        }
        case (DELETE_USER) : {
            return {
                ...state,
                userPosts: [...state.userPosts].filter(el => el.id !== action.postId)
            }
        }
        case (SET_PHOTO) : {
            const newUserPosts = state.userPosts.map(post => ({
                ...post,
                photo: action.file
            }));
            return {
                ...state,
                user: {...state.user, photo: action.file},
                userPosts: [...newUserPosts],
            }
        }
        case (TOGGLE_LIKES) : {
            const newLikes = state.userPosts.map(post => {
                if (post.id === action.postId) {
                    if (!post.liked)
                        return {
                            ...post,
                            likes: ++post.likes,
                            liked: true
                    }
                    return {
                        ...post,
                        likes: --post.likes,
                        liked: false,
                    }
                }
                return post
            })
            return {
                ...state,
                userPosts: [...newLikes]
            }
        }
        default:
            return state
    }
}

export const addPostCreator = (newText) => ({type: ADD_POST, newText})
export const deletePostCreator = (postId) => ({type: DELETE_USER, postId})
export const toggleLikesCreator = (postId) => ({type: TOGGLE_LIKES, postId})
export const setUserProfile = (user) => ({type: SET_USER_PROFILE, user})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhoto = (file) => ({type: SET_PHOTO, file})

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
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then(res => {
            if (res.data.resultCode === 0)
                dispatch(setStatus(status))
        })
    }
}
export const addPhoto = (filePhoto) => {
    return async (dispatch) => {
        let res = await profileApi.setPhoto(filePhoto)
        if (res.data.resultCode === 0) {
            dispatch(savePhoto(res.data.data.photos.large))
        }
    }
}
export const saveProfile = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId
        const res = await profileApi.setProfileData(profile)
        if (res.data.resultCode === 0) {
            dispatch(getProfile(userId))
        } else {
            dispatch(stopSubmit('edit-profile', {_error: res.data.messages[0]}))
            return Promise.reject(res.data.messages[0])
        }
    }
}
export default profileReducer;

