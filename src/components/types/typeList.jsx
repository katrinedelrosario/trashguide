import {useState, useEffect } from 'react';
import style from '../types/typeList.module.scss'

export const TypeList = ({ categoryId, sectionColor }) => {
  const [types, setTypes] = useState([]) //state for storing list of types

  useEffect(() => {
    //fetches types based on the category id
    const fetchTypes = async () => {
      try {
        const response = await fetch(`http://localhost:3000/types/${categoryId}`)
        if (!response.ok) throw new Error(`Failed to fetch types for category ${categoryId}`)
        const data = await response.json()
        setTypes(data); //sets the fetched data to types state
      } catch (error) {
        console.error('typeList - fetch error:', error);
      }
    }

    if (categoryId) {
      fetchTypes() //only fetches if category id is provided
    }
  }, [categoryId]) //effect depends of category id

  if (!types.length) {
    return <p>Loading types..</p>; 
  }
  
  //filters types based on is_allowed within the nested categories array
  const approvedTypes = types.filter(type => 
    type.categories.some(category => category.rules && category.rules.is_allowed)
  );
    const notApprovedTypes = types.filter(type => 
    type.categories.every(category => category.rules && !category.rules.is_allowed)
  );

  return (
    <div className={style.typeListContainer}>
      <h3 className={style.typeHeader}>Hvad modtager vi?</h3>
      <ul className={style.typeList}>
        {approvedTypes.map((type) => (
          <li key={type.id}>
            <span className={style.typeName}>{type.title}</span>
            <span className={`${style.badge} ${style.approved}`}>Ja tak</span>
          </li>
        ))}
      </ul>

      <h3 className={style.typeHeader}>Hvad modtager vi ikke?</h3>
      <ul className={style.typeList}>
        {notApprovedTypes.map((type) => (
          <li key={type.id}>
            <span className={style.typeName}>{type.title}</span>
            <span className={`${style.badge} ${style.notApproved}`}>Nej tak</span>
          </li>
        ))}
      </ul>
    </div>
  );
};