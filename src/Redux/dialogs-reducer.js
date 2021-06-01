const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
    messagesData: [
        {messages: 'Hi', id: 1},
        {messages: 'What/s up ?', id: 2},
        {messages: 'Hey', id: 3},
        {messages: 'Bro', id: 4},
        {messages: 'Hi', id: 5},
    ],
    personsData: [
        {name: 'Dimych', id:1},
        {name: 'Valera', id:2},
        {name: 'Vika', id:3},
        {name: 'Dasha', id:4},
        {name: 'Katya', id:5},
        {name: 'Minin', id:6},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SEND_MESSAGE) : {
            let bodyText = action.messageBody
            return {
                ...state,
                messagesData: [...state.messagesData, {messages: bodyText, id: Math.trunc(Math.random() * 1000)}]
            }
        }
        default:
            return state
    }
}
export const sendMessageCreator = (messageBody) => ({type: SEND_MESSAGE, messageBody})
export default dialogsReducer;
