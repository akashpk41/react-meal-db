import React, { useEffect, useState } from "react";
import Food from "./Food/Food";
import "./Food/Food.css";
const Foods = () => {
  const [foods, setFoods] = useState([]);
  // ! fetch all food data from mealdb api
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  return (
    <div className="container">
      <div className="food-container">
        {foods.map((food) => (
          <Food key={food.idMeal} food={food} />
        ))}
      </div>
      <div className="food-details">
        <h3>Food Info  </h3>
      </div>
    </div>
  );
};

export default Foods;
