import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "../../components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getIngredients from "../../shared/api/addIngrеdients/addIngredients";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import Loader from "../../components/Loader/Loader";

const RecipePage = () => {
  const { recipeId } = useParams();
  const [ingridients, setIngridients] = useState(null);

  useEffect(() => {
    getIngredients(recipeId).then((data) => setIngridients(data));
  }, [recipeId]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div>
      {ingridients ? (
        <MainContainer>
          <RecipePageHero ingridients={ingridients} />
          <RecipeIngredientsList ingridients={ingridients} />
          <RecipePreparation ingridients={ingridients} />
        </MainContainer>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default RecipePage;
