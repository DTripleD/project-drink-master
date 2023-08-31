import { IMG,P1,List,DIV } from './RecipeIngredientsList.styled';


const RecipeIngredientsList = ({ ingridients }) => {
  if (!ingridients) {
    return <p>Something went wrong,try again...</p>;
  }
  const ingredientItems = ingridients.ingredients;

  return (
    <div className="recipe-ingredients-list">
      <P1>Ingredients</P1>
      <List>
      {ingredientItems.map((ingredient, index) => (
        <li key={index} className="ingredient-item">
          <IMG
            src={ingredient['thumb-small']||'/plug-m.png'}
            srcSet={`
              ${ingredient['thumb-medium']||'/plug-m.png'} 480w,
              ${ingredient.ingredientThumb||'/plug-b.png'} 748w
            `}
            sizes="(min-width: 1200px) 270px, (min-width:768px) 354px, (min-width:480px) 450px, 100vw" 
            alt={ingredient.title}
            loading='lazy'
          />
          <DIV>
          <h3 className="ingredient-title">{ingredient.title}</h3>
          <P1>{ingredient.measure}</P1>
          </DIV>
          </li>
          ))}
          </List>
      
    </div>
  );
};

export default RecipeIngredientsList;