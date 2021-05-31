import {headerAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SET_USER_DATA) :
        case (SET_CAPTCHA_URL) : {
            return {
                ...state,
                ...action.payload,
            }
        }
        case (TOGGLE_FETCHING) : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default :
            return state
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})
export const setToggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, payload: {captchaUrl}})

export const getUserAuth = () => {
    return async (dispatch) => {
        dispatch(setToggleFetching(true))

        const data = await headerAPI.getUserAuth()
        if (data) dispatch(setToggleFetching(false))
        if (data.resultCode === 0) {
            let {email, id, login} = data.data
            dispatch(setAuthUserData(id, login, email, true))
        }
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const res = await headerAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        localStorage.removeItem('rememberMe')
        localStorage.removeItem('password')
        if (rememberMe) {
            localStorage.setItem('rememberMe', rememberMe)
            localStorage.setItem('password', password)
        }
        dispatch(getUserAuth())
        return
    }
    if (res.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
    }
    const message = res.data.messages ? res.data.messages[0] : 'Something went wrong'
    dispatch(stopSubmit('login', {_error: message}))
}


export const getCaptchaUrl = () => {
    return async (dispatch) => {
        const res = await securityAPI.getCaptchaUrl()
        const captchaUrl = res.data.url
        dispatch(setCaptchaUrl(captchaUrl))
    }
}

export const logout = () => async (dispatch, getState) => {
    const rememberMe = localStorage.rememberMe
    if (rememberMe) {
        const email = getState().auth.email
        dispatch(setAuthUserData(null, null, email, false))
        return
    }
    const res = await headerAPI.logout()
    if (res.data.resultCode === 0)
        return dispatch(setAuthUserData(null, null, null, false))
}
export default authReducer;
