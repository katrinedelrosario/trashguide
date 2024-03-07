import { useFetch } from '../../hooks/useFetch';
import style from './details.module.scss';

export const SectionDetails = ({ details, onClose }) => {
  
  const url = `http://localhost:3000/category/details/${details.id}`;
  const categories = useFetch(url);
  console.log(categories);

  return (
    <div className={style.sectionDetails}>
      <div className={style.header}>
        <h2 className={style.title}>{details.title}</h2>
        <button onClick={onClose} className={style.closeButton}>X</button>
      </div>
      <p className={style.description}>{details.description}</p>
      
      <div className={style.categories}>
        {details.categories.map((category) => (
          <div key={category.id} className={style.category}>
            <h3 className={style.categoryTitle}>{category.title}</h3>

          </div>
        ))}
      </div>
    </div>
  );
};
