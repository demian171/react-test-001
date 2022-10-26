import logo from '../../logo.svg';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className="">
            <div className={s.headerWrapper} >
                <img src={logo} alt="" className={s.logo}/>
                <nav className={s.navbar}>
                    <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/'>Home</NavLink>
                    <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/users'>Users</NavLink>
                    <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/profile'>Profile</NavLink>
                    <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/dialogs'>Dialogs</NavLink>
                </nav>
            </div>
        </header>
);
}

export default Header;
