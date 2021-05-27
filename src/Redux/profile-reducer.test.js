import profileReducer, {addPostCreator, deletePostCreator} from "./profile-reducer";
import userIcon from "../assets/users_images/user-male.png";

// 1. test data
let initialState = {
    userPosts: [
        {message: "Hi, how are you ?", likes: 15, id: 10, photo: {userIcon}},
        {message: "It's my first post", likes: 20, id: 15, photo: {userIcon}},
    ]
}
test('length of posts must be increasing', () => {
    // 2. action
    const action = addPostCreator('this a new message from test')
    let newState = profileReducer(initialState, action)
    // 3. what do we expect
    expect(newState.userPosts.length).toBe(3)
})
test('message is the same what we passed to the function', () => {
    let action = addPostCreator('New text is passed')
    let newState = profileReducer(initialState, action)
    expect(newState.userPosts[3].message).toBe('New text is passed')
})
test('after deleting should return 1 element', () => {
    let action = deletePostCreator(10)
    let newState = profileReducer(initialState, action)
    expect(newState.userPosts.length).toBe(1)
})
test('if id is wrong length should stay the same', () => {
    let action = deletePostCreator(110)
    let newState = profileReducer(initialState, action)
    expect(newState.userPosts.length).toBe(2)
})