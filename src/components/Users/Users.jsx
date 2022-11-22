import s from "./Users.module.css";
import * as React from "react";

let Users = (props) => {
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
