import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "../../components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getIngredients from "../../shared/api/addIngrеdients/addIngredients";
import { MainContainer } from "../../components/MainContainer/MainContainer";
// import { addFavoriteRecipe } from "../../shared/api/favoriteRecipe";
import { useDispatch } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
} from "../../redux/favorite/favorite-operation";
import {
  selectIsLoading,
  selectError,
  selectFavorites,
} from "../../redux/favorite/favorite-selector";
import { useSelector } from "react-redux";
import { fetchFavorites } from "../../redux/favorite/favorite-operation";

const RecipePage = () => {
  const { recipeId } = useParams();
  const [ingridients, setIngridients] = useState(null);
  const [isAddFavorite, setIsAddFavorite] = useState(false);
  const favoriteRecipe = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    getIngredients(recipeId).then((data) => setIngridients(data));
  }, [recipeId]);

  useEffect(() => {
    // Проверяем, находится ли recipeId в favoriteRecipe
    const isFavorite = favoriteRecipe.some((recipe) => recipe._id === recipeId);
    setIsAddFavorite(isFavorite);
  }, [favoriteRecipe, recipeId]);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div>
      <MainContainer>
        {ingridients && <RecipePageHero ingridients={ingridients} />}

        {!isAddFavorite ? (
          <button type="button" onClick={() => dispatch(addFavorite(recipeId))}>
            Add favorite recipe
          </button>
        ) : (
          <button
            type="button"
            onClick={() => dispatch(deleteFavorite(recipeId))}
          >
            Delete favorite recipe
          </button>
        )}

        {ingridients && <RecipeIngredientsList ingridients={ingridients} />}
        {ingridients && <RecipePreparation ingridients={ingridients} />}
      </MainContainer>
    </div>
  );
};

export default RecipePage;
