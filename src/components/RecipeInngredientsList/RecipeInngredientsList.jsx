import { useEffect } from "react";
import React from 'react';
import getIngredients from '../../shared/api/addIngridients/addIngredients.js';


useEffect(() => { 
    getIngredients ("639b6de9ff77d221f190c5c4").then((data) => console.log(data)); 
  }, []);

const RecipeIngredientsList = ({ ingredients }) => {
  return (
    <div className="recipe-ingredients-list">
      {ingredients.map((ingredient, index) => (
        <div key={index} className="ingredient-item">
          <img
            src={ingredient.image || 'placeholder-image-url'}
            alt={ingredient.title}
            className="ingredient-image"
          />
          <h3 className="ingredient-title">{ingredient.title}</h3>
          {ingredient.description && (
            <p className="ingredient-description">{ingredient.description}</p>
          )}
          <p className="ingredient-amount">{ingredient.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeIngredientsList;
