import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogsData = [
    {id: '1', name: 'Dima'},
    {id: '1', name: 'Alex'},
    {id: '1', name: 'Sam'},
    {id: '1', name: 'Nik'},
    {id: '1', name: 'Jack'},
    {id: '1', name: 'Lina'},
]

let messageData = [
    { id: 1, message: 'hi, my friend'},
    { id: 2, message: 'second message'},
    { id: 3, message: 'third message'},
    { id: 4, message: 'my four message'},
    { id: 5, message: 'last message'}
]

let dialogsElement = dialogsData.map( s => <DialogItem name={s.name} id={s.id} /> )
let messagesElement = messageData.map( m => <Message message={m.message} id={m.id} /> )

function Dialogs() {
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
