import { useNavigate } from "react-router-dom"

export const Button = ( {text, className, to}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(to)
    }

    return (
        <button className={className} onClick={handleClick}>{text}</button>
    )
}