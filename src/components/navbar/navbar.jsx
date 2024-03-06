import { NavLink } from "react-router-dom";
import logo from "../../assets/images/layout/logo.svg"
import style from "./navbar.module.scss"
import { Title } from "../title/title";
import lockIcon from '../../assets/images/layout/icon-unlock.svg';
import ellipseBg from '../../assets/images/layout/green-ellipse.svg';
export const Navbar = () => {

    
    return (
        <nav className={style.navbarStyle}>
            <div className={style.logo}>
                <NavLink to='/frontpage'>
                <img src={logo} alt="Affaldsguiden Logo" />
                <Title title='Affaldsguiden'/>
                </NavLink>
            </div>

            <ul>
                <li><NavLink to="/frontpage">Forside</NavLink></li>
                <li><NavLink to="/sorting">Sortering</NavLink></li>
                <li><NavLink to="/stations">Genbrugsstationer</NavLink></li>
                <li><NavLink to="/order">Bestil beholder</NavLink></li>
                
            </ul>

            <div className={style.loginBtn}>
                <li><NavLink to="/login">
                        <img src={ellipseBg} className={style.ellipse} alt="ellipse background"/>
                        <img src={lockIcon} className={style.lockIcon} alt="lock icon" />
                </NavLink></li>
            </div>
        </nav>
    )
}