// import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import {
  ItemCard,
  ItemImg,
  ItemTextWrapper,
  ItemTitle,
  ItemGlass,
  ItemDescription,
  ButtonSection,
} from "./FavoriteItem.styled";
import { DeleteButton } from "../../components/Button/DeleteButton/DeleteButton";
import { SeeButton } from "../../components/Button/SeeButton/SeeButton";
import defaultImg from "../../images/plug-m.png";
// import { useDispatch } from "react-redux";
// import {
//   deleteFavorite,
//   fetchFavorites,
// } from "../../redux/favorite/favorite-operation";

const FavoriteItem = ({ recipe, removeCocktail }) => {
  // const dispatch = useDispatch();
  return (
    <ItemCard>
      <ItemImg
        src={recipe.drinkThumb ? recipe.drinkThumb : defaultImg}
        alt={recipe.drink}
      />
      <ItemTextWrapper>
        <ItemTitle>{recipe.drink}</ItemTitle>
        <ItemGlass>{recipe.glass}</ItemGlass>
      </ItemTextWrapper>

      <ItemDescription>{recipe.description || "Good cocktail"}</ItemDescription>
      <ButtonSection>
        <SeeButton id={recipe._id} />

        <DeleteButton
          id={recipe._id}
          text={"Delete"}
          ariaLabel={"button for click"}
          onClick={() => removeCocktail(recipe._id)}
          type={"button"}
        />
      </ButtonSection>
    </ItemCard>
  );
};
FavoriteItem.propTypes = {
  recipe: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
export default FavoriteItem;
