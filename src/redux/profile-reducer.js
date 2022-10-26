const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialSate = {
    posts: [
        {id: 1, name: 'Alex', likes: 5, message: '111 wqa hi, my friend'},
        {id: 2, name: 'Nik', likes: 7, message: '222 Nik, are You sure?'},
        {id: 3, name: 'Dem', likes: 3, message: '333 Nik come to me'},
        {id: 4, name: 'Lida', likes: 4, message: '444 Superman is back'},
    ],
    newPostText: 'test text'
};

const profileReducer = (state = initialSate, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 15,
                name: '',
                message: state.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

//Action Creators
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;