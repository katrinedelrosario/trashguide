import style from './card.module.scss'

export const Card = ({ section }) => {
    const backgroundColor = `#${section.color}`;

    return (
        <div className={style.card} style={{ backgroundColor }}>
            <img src={section.filepath} alt={section.title} className={style.image} />
            <div className={style.title}>{section.title}</div>
        </div>
    );
};
