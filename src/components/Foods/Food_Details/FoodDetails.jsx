import React from "react";
import "./FoodDetails.css";
const FoodDetails = ({ foodInfo }) => {
  console.log(foodInfo);
  const { strMeal } = foodInfo;

  return (
    <div className="food-details-container">
      <h3>Food Details</h3>
      <h5> Name : {strMeal} </h5>
    </div>
  );
};

export default FoodDetails;
