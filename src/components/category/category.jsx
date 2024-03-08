import { useState } from 'react';
import { TypeList } from '../types/typeList';
import style from '../category/category.module.scss'

export const Category = ({ category, sectionColor }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={style.container}>
      <div onClick={toggleExpand} className={style.header}>
        <img src={category.icon_filepath} alt={`${category.title} icon`} className={style.icon} />
        <h3>{category.title}</h3>
      </div>
      {isExpanded && (
        <div className={style.content}>
          <TypeList categoryId={category.id} sectionColor={sectionColor} />
        </div>
      )}
    </div>
  )
}
