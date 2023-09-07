import RecipePageTitle from "../RecipePageTitle/RecipePageTitle";
import { P1, P2, IMG, Wrapper, DIV } from "./RecipePageHero.styled";
import FavoriteButton from "../Button/FavoriteButton/FavoriteButton";
import PropTypes from "prop-types";
import defaultImg from "../../images/plug-b.png";

const RecipePageHero = ({
  ingridients: { drink, glass, drinkThumb, description },
}) => {
  return (
    <Wrapper>
      <div>
        <P1>{glass}</P1>
        <RecipePageTitle title={drink} />
        <P2>
          {description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium debitis optio deserunt dignissimos commodi nisi expedita itaque dolor provident. Atque labore, corrupti totamaccusantium omnis alias vero. Itaque eos ullam aut rerum quam. Nontemporibus vel dolore similique, suscipit amet."}
        </P2>
        <FavoriteButton />
      </div>
      <DIV>
        <IMG src={ drinkThumb || defaultImg} alt={drink} />
      </DIV>
    </Wrapper>
  );
};

RecipePageHero.propTypes = {
  ingridients: PropTypes.object,
  drink: PropTypes.string,
  glass: PropTypes.string,
  drinkThumb: PropTypes.string,
  description: PropTypes.string,
};

export default RecipePageHero;
