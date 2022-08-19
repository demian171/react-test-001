let renderMainTree = () => {
    console.log('renderMainTree');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, name: 'Alex', likes: 5, message: '111 wqa hi, my friend'},
            {id: 2, name: 'Nik', likes: 7, message: '222 Nik, are You sure?'},
            {id: 3, name: 'Dem', likes: 3, message: '333 Nik come to me'},
            {id: 4, name: 'Lida', likes: 4, message: '444 Superman is back'},
        ],
        newPostText: 'newPostText some test'
    },
    messagesPage: {
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
        ]
    }
}

export const addPost = (postMessage) => {
    let newPost = {
        id: 15,
        name: '',
        message: postMessage,
        likes: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    renderMainTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderMainTree(state);
}

export const subscribe = (observer) => {
    renderMainTree = observer; //pattern observer (наблюдатель)
}

export default state;