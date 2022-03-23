import React from "react";
import "./Food.css";
const Food = ({ food }) => {
  const { strMeal,  strInstructions, strMealThumb } = food;
  return (
    <div className="card">
      <img src={strMealThumb} alt="" />
      <h3 className='food-name' >{strMeal} </h3>
      <p> {strInstructions.slice(0,100)} </p>
      <button className='btn' > Show More Info </button>
    </div>
  );
};

export default Food;
