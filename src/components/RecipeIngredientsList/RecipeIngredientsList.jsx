const RecipeIngredientsList = ({ ingridients }) => {
  if (!ingridients) {
    return <p>Something went wrong,try again...</p>;
  }
  const ingredientItems = ingridients.ingredients;

  return (
    <div className="recipe-ingredients-list">
      {ingredientItems.map((ingredient, index) => (
        <div key={index} className="ingredient-item">
          <img
            src={ingredient.ingredientThumb || 'placeholder-image-url'}
            alt={ingredient.title}
            className="ingredient-image"
          />
          <h3 className="ingredient-title">{ingredient.title}</h3>
          <p className="ingredient-amount">{ingredient.measure}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeIngredientsList;