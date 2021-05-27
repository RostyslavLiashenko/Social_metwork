export const updateObjectInArray = (state, action, newObj) => {
    return {
        ...state,
        followed: state.users.map((user) => {
            if (user.id === action.userID)
                return {...user, ...newObj}
            return user
        })
    }
}