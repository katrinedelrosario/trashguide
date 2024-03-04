import style from '../featuredCard/featuredCard.module.scss'

export const FeaturedCard = ({image,title, description, onClick, variant}) => {
    const cardStyle = variant === 'destination' ? style.destinationCard : style.card;
    return (
        <div className={style.card} onClick={onClick}>
            <img className={style.image} src={image} alt=''/>
            <div className={style.content} >
                <h3 className={style.title}>{title}</h3>
                <p className={style.description}>{description}</p>
            </div>
        </div>
    )
}