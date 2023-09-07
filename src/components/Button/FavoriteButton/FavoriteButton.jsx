import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledButton } from "./FavoriteButton.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
  fetchFavorites,
} from "../../../redux/favorite/favorite-operation";
import {
  selectFavorites,
  selectIsLoading,
} from "../../../redux/favorite/favorite-selector";

const FavoriteButton = () => {
  const { recipeId } = useParams();
  const [isAddFavorite, setIsAddFavorite] = useState(false);
  const favoriteRecipe = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  useEffect(() => {
    const isFavorite = favoriteRecipe.some((recipe) => recipe._id === recipeId);
    setIsAddFavorite(isFavorite);
  }, [favoriteRecipe, recipeId]);

  return (
    <div>
      {!isAddFavorite ? (
        <StyledButton
          disabled={isLoading}
          type="button"
          onClick={() => dispatch(addFavorite(recipeId))}
        >
          Add to favorite recipe
        </StyledButton>
      ) : (
        <StyledButton
          disabled={isLoading}
          type="button"
          onClick={() => dispatch(deleteFavorite(recipeId))}
        >
          Remove from favorites
        </StyledButton>
      )}
    </div>
  );
};

export default FavoriteButton;
