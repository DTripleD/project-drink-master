import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "../../components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getIngredients from "../../shared/api/addIngrеdients/addIngredients";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { addFavoriteRecipe } from "../../shared/api/favoriteRecipe";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../redux/favorite/favorite-operation";

const RecipePage = () => {
  const { recipeId } = useParams();
  const [ingridients, setIngridients] = useState(null);
  const [isAddFavorite, setIsAddFavorite] = useState(true);

  useEffect(() => {
    getIngredients(recipeId).then((data) => setIngridients(data));
  }, [recipeId]);

  // const handleAddFavotiteRecipe = async (recipeId) => {
  //   try {
  //     // Отправляем запрос на бэкенд для добавления рецепта
  //     const response = await addFavoriteRecipe(recipeId);
  //     setIsAddFavorite(false);
  //   } catch (error) {
  //     console.log("Failed to add recipe");
  //   }
  // };
  const dispatch = useDispatch();

  return (
    <div>
      <MainContainer>
        {isAddFavorite ? (
          <button type="button" onClick={() => dispatch(addFavorite(recipeId))}>
            Add favorite recipe
          </button>
        ) : (
          <h4>Recipe in Favorite</h4>
        )}

        {ingridients && <RecipePageHero ingridients={ingridients} />}
        {ingridients && <RecipeIngredientsList ingridients={ingridients} />}
        {ingridients && <RecipePreparation ingridients={ingridients} />}
      </MainContainer>
    </div>
  );
};

export default RecipePage;
