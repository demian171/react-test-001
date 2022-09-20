import s from './Dialogs.module.css';
// import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";


function Dialogs(props) {
    let dialogsElement = props.state.dialogs.map( s => <DialogItem name={s.name} id={s.id} /> )
    let messagesElement = props.state.messages.map( m => <Message message={m.message} id={m.id} /> )
    let newMessageElement = React.createRef();


    let onMessageChange = (e) => {
        // let text = newMessageElement.current.value;
        let text = e.target.value;
        props.dispatch(updateNewMessageCreator(text));
        console.log(text);
    }

    let addMessage = () => {
        props.dispatch(addMessageCreator());
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
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.state.newMessageText} cols="50" rows="10"> </textarea>
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
