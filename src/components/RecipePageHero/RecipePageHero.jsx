import RecipePageTitle from "../RecipePageTitle/RecipePageTitle";
import {P1,P2,IMG,Wrapper} from './RecipePageHero.styled'
import FavoriteButton from '../Button/FavoriteButton/FavoriteButton'

const RecipePageHero = ({
  ingridients: { drink, glass, drinkThumb, description },
}) => {

  return (
    <Wrapper>
      <div>
      <P1>{glass}</P1>
      <RecipePageTitle title={drink}/>
      <P2>
        {description} || Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Praesentium debitis optio deserunt dignissimos commodi nisi
        expedita itaque dolor provident. Atque labore, corrupti totam
        accusantium omnis alias vero. Itaque eos ullam aut rerum quam. Non
        temporibus vel dolore similique, suscipit amet.
      </P2>
      <FavoriteButton/>
      </div>
      <div>
     <IMG src={drinkThumb} alt={drink}/>
      </div>
    </Wrapper>
  );
};

export default RecipePageHero;
