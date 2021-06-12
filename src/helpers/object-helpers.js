export const updateObjectInArray = (state, action, newObj) => {
    return {
        ...state,
        users: state.users.map((user) => {
            if (user.id === action.userID)
                return {...user, ...newObj}
            return user
        })
    }
}