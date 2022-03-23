import React, { useEffect, useState } from "react";
import Food from "./Food/Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  // ! fetch all food data from mealdb api
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  return (
    <div>
      <h1>total foods {foods.length}</h1>
      {foods.map((food) => (
        <Food key={food.idMeal} food={food} />
      ))}
    </div>
  );
};

export default Foods;
