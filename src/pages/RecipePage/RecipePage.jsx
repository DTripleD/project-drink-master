import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "../../components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getIngredients from "../../shared/api/addIngrеdients/addIngredients";
import { MainContainer } from "../../components/MainContainer/MainContainer";

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
