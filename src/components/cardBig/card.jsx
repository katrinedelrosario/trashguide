import style from './card.module.scss';

export const Card = ({ image, title, text, action, alt,reversed }) => {
    const card = `${style.card} ${reversed ? style.reversed : ''}`;

    return (
        <div className={card}>
            <div className={style.content}>
                <h2>{title}</h2>
                <p>{text}</p>
            <div className={style.action}>
                {action}
            </div>
            </div>
            <div className={style.imageWrapper}>
                <img src={image} alt={alt} />
            </div>
        </div>
    );
};