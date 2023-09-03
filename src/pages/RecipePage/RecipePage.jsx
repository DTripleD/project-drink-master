import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "../../components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getIngredients from "../../shared/api/addIngrеdients/addIngredients";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorite/favorite-selector";
import { fetchFavorites } from "../../redux/favorite/favorite-operation";

const RecipePage = () => {
  const { recipeId } = useParams();
  const [ingridients, setIngridients] = useState(null);

  useEffect(() => {
    getIngredients(recipeId).then((data) => setIngridients(data));
  }, [recipeId]);

  return (
    <div>
      <MainContainer>
        {ingridients && <RecipePageHero ingridients={ingridients} />}
        {ingridients && <RecipeIngredientsList ingridients={ingridients} />}
        {ingridients && <RecipePreparation ingridients={ingridients} />}
      </MainContainer>
    </div>
  );
};

export default RecipePage;
