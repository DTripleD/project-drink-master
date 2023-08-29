// eslint-disable-next-line react/prop-types
const RecipePreparation = ({ ingridients: { instructions } }) => {
  return (
    <div className="recipe-preparation">
      <p className="preparation-description">Preparation:</p>
      <p>{instructions}</p>
      {/* {image && <img src={image} alt="Cocktail" className="cocktail-image" />}
      <ul className="preparation-steps">
        {steps.map((step, index) => (
          <li key={index} className="preparation-step">
            {step}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RecipePreparation;
