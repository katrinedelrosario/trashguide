import style from "./title.module.scss"

export const Title = ({title, className}) => {
    return <h1 className={className}>{title}</h1>
}