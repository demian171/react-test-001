import s from './Dialogs.module.css';
// import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";
// import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map( s => <DialogItem name={s.name} id={s.id} /> )
    let messagesElement = props.dialogsPage.messages.map( m => <Message message={m.message} id={m.id} /> )
    // debugger
    let newMessageElement = React.createRef();


    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text);
        console.log(text);
    }

    let addMessage = () => {
        props.addMessageText();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {dialogsElement}
            </div>
            <div className={s.personMessages}>
                {messagesElement}
            </div>

        <div>
            <div>
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dialogsPage.newMessageText} cols="50" rows="10"> </textarea>
            </div>
            <div>
                <button  onClick={addMessage}> Add new post
                </button>
            </div>
        </div>

        </div>
    );
}

export default Dialogs;
