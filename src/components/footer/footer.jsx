import { NavLink } from "react-router-dom"
import style from "../footer/footer.module.scss"


export const Footer = () => {

    return (
        <footer className={style.footer}>
            <section>
                <p>© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>
                <div className={style.soMe}>
                <p><a><img src='https://placehold.it/32x32' alt=''/></a></p>
                <p><a><img src='https://placehold.it/32x32' alt=''/></a></p>
                </div>

                <nav>
                    <ul>
                        <li><NavLink to="/frontpage">forside</NavLink></li>
                        <li><NavLink to="/hotels">hoteller & destinationer</NavLink></li>
                        <li><NavLink to="/rooms">værelser</NavLink></li>
                        <li><NavLink to="/reservations">reservation</NavLink></li>
                        <li><NavLink to="/login">login</NavLink></li>
                    </ul>
                </nav>
            </section>
        </footer>
        
    )
}
