import { useState } from "react";
import { Category } from "./category";

export const CategoriesList = ({ categories, sectionColor }) => {
  const [expandedCategoryId, setExpandedCategoryId] = useState(null)

  const handleCategoryClick = (id) => {
    setExpandedCategoryId(expandedCategoryId === id ? null : id)
  }

  return (
    <div>
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          expanded={expandedCategoryId === category.id}
          onToggle={() => handleCategoryClick(category.id)}
          sectionColor={sectionColor}
        />
      ))}
    </div>
  )
}