import { useState, useEffect } from 'react';
import style from './details.module.scss'
import { CategoriesList } from '../category/categoriesList';
import closeIcon from '../../assets/images/layout/cross.png'

export const Details = ({ sectionId, onClose }) => {
  const [details, setDetails] = useState(null)

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/section/${sectionId}`)
        if (!response.ok) throw new Error('failed to fetch')
        const data = await response.json()
        setDetails(data)
      } catch (error) {
        console.error('fetch error:', error);
      }
    };

    if (sectionId) {
      fetchSectionData()
    }
  }, [sectionId])

  if (!details) {
    return <p>Loading..</p>
  }

  const sectionStyle = {
    backgroundColor: `#${details.color}`,
  }

  return (
    <div className={style.modal}>
      <button onClick={onClose} className={style.closeBtn}><img src={closeIcon} alt="x-closing icon " /></button>
      <div className={style.content}>
        <div className={style.header} style={sectionStyle}>
          <h1>{details.title}</h1>
          <img src={details.filepath} alt={details.title} className={style.sectionImg} />
        </div>
        <CategoriesList categories={details.categories} sectionColor={details.color} />
      </div>

    </div>
  )
}