import userIcon from '../assets/users_images/userPhoto.jpg'

const SEND_MESSAGE = 'SEND_MESSAGE'
const DELETE_MESSAGE = 'DELETE_MESSAGE'

const initialState = {
    usersData: [
        {name: 'Evgen', id: 1, photo: userIcon, messages: ['Hello', 'How are you ?']},
        {name: 'Valera', id: 2, photo: userIcon, messages: ['Hi', 'What are you doing ?']},
        {name: 'Vika', id: 3, photo: userIcon, messages: ["What's up ?"]},
        {name: 'Dasha', id: 4, photo: userIcon, messages: ['Happy birthday', "It's the best day", "I'm exiting to meeting"]},
        {name: 'Katya', id: 5, photo: userIcon, messages: ['How is it going ???']},
        {name: 'Pasha', id: 6, photo: userIcon, messages: []},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SEND_MESSAGE) : {
            const newMassagesArr = [...state.usersData[action.userId - 1].messages, action.messageBody]
            const newUsersData = state.usersData.map(data => {
                if (data.id === action.userId) {
                    return {
                        name: data.name,
                        id: data.id,
                        photo: data.photo,
                        messages: newMassagesArr
                    }
                } else {
                    return data
                }
            })
            return {
                ...state,
                usersData: newUsersData
            }
        }
        case (DELETE_MESSAGE) : {
            state.usersData[action.userId - 1].messages.splice(action.numMsg, 1)
            return {
                ...state,
                usersData: [...state.usersData]
            }
        }
        default:
            return state
    }
}
export const sendMessageCreator = (messageBody, userId) => ({type: SEND_MESSAGE, messageBody, userId})
export const deleteMessageCreator = (numMsg, userId) => ({type: DELETE_MESSAGE, numMsg, userId})
export default dialogsReducer;
