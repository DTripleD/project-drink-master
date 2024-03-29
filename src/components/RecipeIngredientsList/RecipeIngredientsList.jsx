import { IMG,P1,P2,Li,List,DIV,IngredientTitle,Wrapper } from './RecipeIngredientsList.styled';
import PropTypes from "prop-types";
import defaultImg from "../../images/plug-m.png";

const RecipeIngredientsList = ({ ingridients }) => {
  if (!ingridients) {
    return <P1>Something went wrong,try again...</P1>;
  }
  const ingredientItems = ingridients.ingredients;

  return (
    <Wrapper>
      <P1>Ingredients</P1>
      <List>
      {ingredientItems.map((ingredient, index) => (
        <Li key={index}>
          <IMG
            src={ingredient['thumb-small'] || defaultImg}
            srcSet={`
              ${ingredient['thumb-medium'] || defaultImg} 480w,
              ${ingredient.ingredientThumb || defaultImg} 748w
            `}
            sizes="(min-width: 1440px) 450px, (min-width:768px) 354px, (min-width:375px) 270px, 100vw" 
            alt={ingredient.title}
            loading='lazy'
          />
          <DIV>
          <IngredientTitle>{ingredient.title}</IngredientTitle>
          <P2>{ingredient.measure}</P2>
          </DIV>
          </Li>
          ))}
          </List>
      
    </Wrapper>
  );
};

RecipeIngredientsList.propTypes = {
  ingridients: PropTypes.object,
  ingredients: PropTypes.array,
  title: PropTypes.string,
  measure: PropTypes.string,
  ingredientThumb: PropTypes.string,
}

export default RecipeIngredientsList;