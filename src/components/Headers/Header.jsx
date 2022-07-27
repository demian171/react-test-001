import logo from '../../logo.svg';
import style from './Header.module.css';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} alt="" className="logo"/>
            <div className="logo-slogan">My react app</div>
            <nav className={style.navbar}>
                <div className={style.item}>ссылка 1</div>
                <div className={style.item}>ссылка 2</div>
                <div className={style.item}>ссылка 3</div>
                <div className={style.item}>ссылка 4</div>
                <div className={style.item}>ссылка 5</div>
            </nav>
        </header>
    );
}

export default Header;
