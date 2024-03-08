import { Card } from './card';
import style from '../section/sectionList.module.scss'

export const Sections = ({ sections, onSectionSelect }) => {

  return (
    <div className={style.cards}>
      {/* checks if therea any sections to even display */}
      {sections.length > 0 ? ( 

        // maps over the sections array to create card for each
        sections.map((section, index) => (
          //triggers the selected section and passing their section's id
          <Card
            key={index}
            section={section}
            onClick={() => onSectionSelect(section.id)} 
          />
        ))
      ) : (
        //if no sections are to be rendered 
        <p>Ingen resultater fundet</p>
      )}
    </div>
  )
}
