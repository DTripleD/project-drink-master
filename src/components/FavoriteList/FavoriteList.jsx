import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/favorite/favorite-selector";
import PropTypes from "prop-types";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

import {
  MyRecipesListStyled,
  Section,
} from "../../components/RecipesList/RecipesList.styled";
import Loader from "../Loader/Loader";

const FavoriteList = ({ currentItems, handleDeleteFavorite }) => {
  //---------------------------------------
  const isLoading = useSelector(selectIsLoading);
  return (
    <Section>
      {(isLoading && <Loader />) || (
        <MyRecipesListStyled>
          {currentItems.map((recipe) => (
            <li key={recipe._id}>
              <FavoriteItem
                recipe={recipe}
                page={"favorite"}
                cocktail={recipe}
                removeCocktail={handleDeleteFavorite}
              />
            </li>
          ))}
        </MyRecipesListStyled>
      )}
    </Section>
  );
};
FavoriteList.propTypes = {
  currentItems: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  handleDeleteFavorite: PropTypes.func,
};
export default FavoriteList;
