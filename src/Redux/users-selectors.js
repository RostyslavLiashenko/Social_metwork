import {createSelector} from "reselect";

export const getUsersSelector = state => state.usersPage.users

export const getUsersSuperSelector = createSelector(getUsersSelector, (users) => {
    return users.filter((u) => true)
})
export const getUsersPerPage = (state) => {
    return state.usersPage.itemsPerPage
}
export const getTotalUsers = (state) => {
    return state.usersPage.totalItemsCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
export const getPageNeighbours = (state) => {
    return state.usersPage.portionSize
}
