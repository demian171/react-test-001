const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialSate = {
    dialogs: [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Alex'},
        {id: '3', name: 'Sam'},
        {id: '4', name: 'Nik'},
        {id: '5', name: 'Jack'},
        {id: '6', name: 'Lina'},
    ],
    messages: [
        {id: 1, message: 'hi, my friend'},
        {id: 2, message: 'second message'},
        {id: 3, message: 'third message'},
        {id: 4, message: 'my four message'},
        {id: 5, message: 'last message'}
    ],
    newMessageText: 'newMessageText'
};


const dialogsReducer = (state = initialSate, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT:     //--------------ADD_NEW_MESSAGE_TEXT
            let newMessage = {
                id: 15,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:   //--------------UPDATE_NEW_MESSAGE_TEXT
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }


}

//Action Creators
export const addMessageCreator = () => ({type: ADD_NEW_MESSAGE_TEXT})
export const updateNewMessageCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})


export default dialogsReducer;