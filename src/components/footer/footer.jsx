import style from "../footer/footer.module.scss"
import logo from "../../assets/images/layout/logo.svg"
import arrowUp from '../../assets/images/layout/icon-arrow-up.svg'

export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <footer className={style.footer}>
            <section>
                <div className={style.content}>
            <div className={style.logo}>
                <img src={logo} alt="Affaldsguiden Logo" />
                <p>Affaldsguiden</p>
            </div>
            <p className={style.firstP}>Vi arbejder for at informere om korrekt affaldssortering. Ved at sortere hjælper du os, men også klimaet.</p>
            <p className={style.secondP}>©2023 Affaldsguiden.</p>

                </div>
            <div className={style.backToTop}>
                <button onClick={scrollToTop}>Back to top <img src={arrowUp} alt="Arrow pointing up" /></button>
            </div>
            </section>
        </footer>
    )
}
