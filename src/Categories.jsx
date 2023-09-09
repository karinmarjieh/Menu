import React from "react";

export const Categories = ({ categories ,filterItems}) => {console.log(categories);
  return (
    <div className="btn-container">
      {
        
        categories.map((category) => {
        return (
          <button type="button" className="btn" key={category} onClick={()=>filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};
