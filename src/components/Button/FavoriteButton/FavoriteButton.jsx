import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledButton } from "./FavoriteButton.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
  fetchFavorites,
} from "../../../redux/favorite/favorite-operation";
import { selectFavorites } from "../../../redux/favorite/favorite-selector";

const FavoriteButton = () => {
  const { recipeId } = useParams();
  const [ingridients, setIngridients] = useState(null);
  const [isAddFavorite, setIsAddFavorite] = useState(false);
  const favoriteRecipe = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  useEffect(() => {
    // Проверяем, находится ли recipeId в favoriteRecipe
    const isFavorite = favoriteRecipe.some((recipe) => recipe._id === recipeId);
    setIsAddFavorite(isFavorite);
  }, [favoriteRecipe, recipeId]);

  return (
    <div>
      {!isAddFavorite ? (
        <StyledButton
          type="button"
          onClick={() => dispatch(addFavorite(recipeId))}
        >
          Add to favorite recipe
        </StyledButton>
      ) : (
        <StyledButton
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
