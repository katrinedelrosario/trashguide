import style from './card.module.scss'

//clickable card which displays their corresponding sections' color, title + img
export const Card = ({ section, onClick }) => {
    const backgroundColor = `#${section.color}`

    return (
        //dynamic style for each sectionCards
        <div className={style.card} style={{ backgroundColor }} onClick={onClick}>
            <img src={section.filepath} alt={section.title} className={style.image} />
            <div className={style.title}>{section.title}</div>
        </div>
    )
}
