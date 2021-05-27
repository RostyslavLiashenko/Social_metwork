import {headerAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SET_USER_DATA) : {
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

export const login = (email, password, rememberMe) => async (dispatch) => {
    const res = await headerAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getUserAuth())
    } else {
        const message = res.data.messages ? res.data.messages[0] : 'Something went wrong'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    const res = await headerAPI.logout()
    if (res.data.resultCode === 0)
        return dispatch(setAuthUserData(null, null, null, false))
}
export default authReducer;
