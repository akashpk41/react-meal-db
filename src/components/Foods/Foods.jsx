import React, { useEffect, useState } from "react";
import Food from "./Food/Food";
import "./Food/Food.css";
import FoodDetails from "./Food_Details/FoodDetails";
const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [foodInfo, setFoodInfo] = useState([]);
  // ! fetch all food data from mealdb api
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  const foodDetails = (foods) => {
    // console.log(foods);
    setFoodInfo(foods);
  };
  // console.log(foodInfo);

  return (
    <div className="container">
      <div className="food-container">
        {foods.map((food) => (
          <Food key={food.idMeal} food={food} foodDetails={foodDetails} />
        ))}
      </div>
      <div className="food-details">
        <FoodDetails foodInfo={foodInfo} />
      </div>
    </div>
  );
};

export default Foods;
