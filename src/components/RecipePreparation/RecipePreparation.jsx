// eslint-disable-next-line react/prop-types
const RecipePreparation = ({ ingridients: { instructions } }) => {
  return (
    <div className="recipe-preparation">
      <p className="preparation-description">Recipe Preparation:</p>
      <p>{instructions}</p>
    </div>
  );
};

export default RecipePreparation;
