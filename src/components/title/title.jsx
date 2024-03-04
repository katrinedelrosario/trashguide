import style from "./title.module.scss"

export const Title = ({title}) => {
    return <h1 className={style.title}>{title}</h1>
}