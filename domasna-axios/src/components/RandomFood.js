import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomFood() {
  const [meal, setMeal] = useState(0);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => {
        setMeal(res.data.meals[0]);
      })
      .catch(error => {
        console.error("Error fetching Random meal", error);
      });
  }, []);

  if (!meal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Random Food</h2>
      <p>Name: {meal.strMeal}</p>
      <p>Category: {meal.strCategory}</p>
      <p>Area: {meal.strArea}</p>
      <p>Instructions: {meal.strInstructions}</p>
    </div>
  );
}

export default RandomFood;
