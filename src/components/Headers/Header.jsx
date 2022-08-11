import logo from '../../logo.svg';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className="">
            <div className={s.headerWrapper} >
                <img src={logo} alt="" className={s.logo}/>
                <nav className={s.navbar}>
                    <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/main'>main</NavLink>
                    <NavLink className={s.item} activeClassName={s.active} to='/profile'>profile</NavLink>
                    <NavLink className={s.item} activeClassName={s.active} to='/dialogs'>dialogs</NavLink>
                </nav>
            </div>
        </header>
);
}

export default Header;
