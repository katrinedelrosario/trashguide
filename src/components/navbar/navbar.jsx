import { NavLink } from "react-router-dom";
//import Logo from "../../assets/logo.svg"
import style from "./navbar.module.scss"

export const Navbar = () => {

    
    return (
        <nav className={style.navbarStyle}>
            <div className={style.header}>
                {/* <img src={Logo} alt="Hotel Overlook Logo" /> */}
            </div>

            <ul>
                <li><NavLink to="/frontpage">forside</NavLink></li>
                <li><NavLink to="/1">1</NavLink></li>
                <li><NavLink to="/2">2</NavLink></li>
                <li><NavLink to="/login">login</NavLink></li>
            </ul>
        </nav>
    )
}