import s from "./Users.module.css";
import * as React from "react";
import axios from "axios";

let Users = (props) => {

    /*
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg',
                followed: false, name: 'Alex', status: '111 wqa hi, my friend', location: {city: 'Kiev', country: 'Ukraine'}},
            {id: 2, photoUrl: 'https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg',
                followed: true, name: 'Demix', status: '222 wqa hi, my friend', location: {city: 'Kiev', country: 'Ukraine'}},
            {id: 3, photoUrl: 'https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg',
                followed: true, name: 'Demix', status: '222 wqa hi, my friend', location: {city: 'Kiev', country: 'Ukraine'}},
            {id: 4, photoUrl: 'https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg',
                followed: false, name: 'Zima', status: '333 wqa hi, my friend', location: {city: 'Kiev', country: 'Ukraine'}}
        ])
    }

     */

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        debugger;
        props.setUsers(response.data.items)
    })


    return (
        <div className={s.home}>
            <h1 className={s.title}>Users page</h1>
            {
                props.users.map(u =>
                    <div className={s.user} key={u.id}>
                        <div  className={s.avatarBlock}>
                            <div className={s.avatar}>
                                <img src={u.photoUrl} alt={u.name}/>
                            </div>
                            <div >
                                {
                                    u.followed
                                        ?
                                        <button className={s.followed} onClick={ () => {props.unfollow(u.id) }}>Отписатся</button>
                                        :
                                        <button className={s.unfollowed} onClick={ () => {props.follow(u.id) }}>Подписатся</button>
                                }

                            </div>

                        </div>
                        <div className={s.info}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default Users;
