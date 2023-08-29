import React from 'react';

const RecipePreparation = ({ image, steps }) => {
  return (
    <div className="recipe-preparation">
      <p className="preparation-description">Preparation:</p>
      {image && <img src={image} alt="Cocktail" className="cocktail-image" />}
      <ul className="preparation-steps">
        {steps.map((step, index) => (
          <li key={index} className="preparation-step">
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipePreparation;