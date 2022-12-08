import s from "./Users.module.css";
import * as React from "react";
import axios from "axios";
import noAvatar from '../../img/no_avatar.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            //debugger;
            this.props.setUsers(response.data.items);
            // this.props.totalUsersCount = response.data.totalCount;
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        // alert(pagesCount);
        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.home}>
                <h1 className={s.title}>Users page</h1>
                <div className={s.pagination}>
                    {pages.map( p => {
                        return <span className={this.props.currentPage === p && s.selectedPage}>{p}</span>
                    })}
                </div>

                {
                    this.props.users.map(u =>
                        <div className={s.user} key={u.id}>
                            <div className={s.avatarBlock}>
                                <div className={s.avatar}>
                                    <img src={u.photos.small != null ? u.photos.small : noAvatar} alt={u.name}/>
                                </div>
                                <div>
                                    {
                                        u.followed
                                            ?
                                            <button className={s.followed} onClick={() => {
                                                this.props.unfollow(u.id)
                                            }}>Отписатся</button>
                                            :
                                            <button className={s.unfollowed} onClick={() => {
                                                this.props.follow(u.id)
                                            }}>Подписатся</button>
                                    }

                                </div>

                            </div>
                            <div className={s.info}>
                                <div>id: {u.id}</div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                        </div>
                    )
                }

            </div>
        );
    }
}

export default Users;
