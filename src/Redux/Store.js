import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./Users-reducer";

let store = {
    _state: {
        profilePage: {
            userPosts: [
                {message: "Hi, how are you ?", likes: 15, id: 10},
                {message: "It's my first post", likes: 20, id: 15},
            ],
            newPostText: '',
        },
        dialogsPage: {
            messagesData: [
                {messages: 'Hi', id: 1},
                {messages: 'What/s up ?', id: 1},
                {messages: 'Hey', id: 1},
                {messages: 'Bro', id: 1},
                {messages: 'Hi', id: 1},
            ],
            personsData: [
                {name: 'Dimych', id: 1},
                {name: 'Valera', id: 2},
                {name: 'Vika', id: 3},
                {name: 'Dasha', id: 4},
                {name: 'Katya', id: 5},
                {name: 'Minin', id: 6},
            ],
            newMessageBody: '',
        },
        sidebar: [
            {name: 'Potap', id: 1, source: 'http://sergeychikin.ru/365/nature/cactus.svg'},
            {name: 'Diana', id: 2, source: 'http://sergeychikin.ru/365/nature/flower-sakura.svg'},
            {name: 'Klusha', id: 3, source: 'http://sergeychikin.ru/365/nature/weather/snowflake.svg'},
        ],
        usersPage: {
            users: [
                /* {id: 1, following: false, fullName: 'Dmitriy', status: 'I am a boss mother fucker', location: {city: 'Minsk', country: 'Belarus'}},
                 {id: 2, following: true, fullName: 'Nadya', status: 'I am a boss too', location: {city: 'Kyiv', country: 'Ukraine'}},
                 {id: 3, following: true, fullName: 'Bodya', status: 'I am a boss joj', location: {city: 'Bratislava', country: 'Slovakia'}},
                 {id: 4, following: false, fullName: 'Yura', status: 'I am a nice boss', location: {city: 'Moscow', country: 'Russia'}},*/
            ],
            usersOnPage: 5,
            totalUsers: 20,
            currentPage: 1,
        },
    },
    renderEntireTree() {
        console.log('state was changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this.renderEntireTree = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._state.usersPage = usersReducer(this._state.usersPage, action)
        this.subscribe(this._state)
    }
}

export default store;