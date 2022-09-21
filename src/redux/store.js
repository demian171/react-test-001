import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, name: 'Alex', likes: 5, message: '111 wqa hi, my friend'},
                {id: 2, name: 'Nik', likes: 7, message: '222 Nik, are You sure?'},
                {id: 3, name: 'Dem', likes: 3, message: '333 Nik come to me'},
                {id: 4, name: 'Lida', likes: 4, message: '444 Superman is back'},
            ],
            newPostText: 'test text'
        },
        dialogsPage: {
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
        }

    },
    _callSubscribe() {
        console.log('renderMainTree');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer; //pattern observer (наблюдатель)
    },
    dispatch(action) { // Меняем _state и отрисовуем
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscribe(this._state);
    }
}




export default store;
window.store = store;