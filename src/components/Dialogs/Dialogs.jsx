import s from './Dialogs.module.css';
// import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
    let dialogsElement = props.state.dialogs.map( s => <DialogItem name={s.name} id={s.id} /> )
    let messagesElement = props.state.messages.map( m => <Message message={m.message} id={m.id} /> )

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {dialogsElement}
            </div>
            <div className={s.personMessages}>
                {messagesElement}
            </div>


        </div>
    );
}

export default Dialogs;
