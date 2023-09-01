import { IMG,P1,P2,List,DIV,IngredientTitle,Wrapper } from './RecipeIngredientsList.styled';


const RecipeIngredientsList = ({ ingridients }) => {
  if (!ingridients) {
    return <p>Something went wrong,try again...</p>;
  }
  const ingredientItems = ingridients.ingredients;

  return (
    <Wrapper>
      <P1>Ingredients</P1>
      <List>
      {ingredientItems.map((ingredient, index) => (
        <li key={index}>
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
          <IngredientTitle>{ingredient.title}</IngredientTitle>
          <P2>{ingredient.measure}</P2>
          </DIV>
          </li>
          ))}
          </List>
      
    </Wrapper>
  );
};

export default RecipeIngredientsList;