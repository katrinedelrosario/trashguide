import { useNavigate } from "react-router-dom"

export const Button = ( {text, className, to, onClick}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        if (onClick) {
            onClick()
        }
        else if (to) {
            navigate(to)
        }
    }

    return (
        <button className={className} onClick={handleClick}>{text}</button>
    )
}