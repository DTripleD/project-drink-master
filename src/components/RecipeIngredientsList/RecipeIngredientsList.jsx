import { IMG,P1 } from './RecipeIngredientsList.styled';


const RecipeIngredientsList = ({ ingridients }) => {
  if (!ingridients) {
    return <p>Something went wrong,try again...</p>;
  }
  const ingredientItems = ingridients.ingredients;

  return (
    <div className="recipe-ingredients-list">
      <P1>Ingredients</P1>
      <ul>
      {ingredientItems.map((ingredient, index) => (
        <li key={index} className="ingredient-item">
          <IMG
            src={ingredient['thumb-small']|| '/plug-s.png'} srcSet=''
            alt={ingredient.title}
            className="ingredient-image"
          />
          <div>
          <h3 className="ingredient-title">{ingredient.title}</h3>
          <P1>{ingredient.measure}</P1>
          </div>
          </li>
          ))}
          </ul>
      
    </div>
  );
};

export default RecipeIngredientsList;