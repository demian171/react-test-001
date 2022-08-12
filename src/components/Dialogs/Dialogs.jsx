import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        // <NavLink className = { navData => navData.isActive ? s.active : s.item } to={path}>{this.props.name}</NavLink>
        //  <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/dialogs/dima'>Dima</NavLink>
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


function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>

                <DialogItem name='Dima' id='1'/>
                <DialogItem name='Oleg' id='2'/>
                <DialogItem name='Serg' id='3'/>
                <DialogItem name='Тина' id='4'/>
                <DialogItem name='Дона' id='5'/>


            </div>
            <div className={s.personMessages}>
                <Message message={'AAAAAAAAA'}/>
                <Message message={'BBBBBBBBBB'}/>
                <Message message={'CCCCCCCC'}/>
                <Message message={'DDDDDDDDDDDD'}/>
            </div>


        </div>
    );
}

export default Dialogs;
