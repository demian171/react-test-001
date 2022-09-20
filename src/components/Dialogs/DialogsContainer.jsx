// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
import * as React from "react";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
// debugger
    let state = props.store.getState().messagesPage;
// debugger
    let onMessageChange = (text) => {
        // let text = newMessageElement.current.value;
        // let text = e.target.value;
        props.store.dispatch(updateNewMessageCreator(text));
        console.log(text);
    }

    let addMessage = () => {
        props.store.dispatch(addMessageCreator());
    }
// debugger
    return (
       <Dialogs updateNewMessageBody={onMessageChange} addMessageText={addMessage} state={state}/>
    );
}

export default DialogsContainer;
