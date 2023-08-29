// import { useState } from "react";
// import AddToFavorite from "./AddToFavorite";
// import RemoveFromFavorite from "./RemoveFromFavorite";
import MainPageTitle from "../MainPageTitle/MainPageTitle";

// const RecipePageHero = ({ recipeData, isFavorite, onToggleFavorite }) => {

// eslint-disable-next-line react/prop-types
const RecipePageHero = ({ ingridients: { drink,glass,drinkThumb } }) => {
  //   const [isInFavorite, setIsInFavorite] = useState(isFavorite);

  //   const handleToggleFavorite = () => {
  //     onToggleFavorite(recipeData.id);
  //     setIsInFavorite(!isInFavorite);
  //   };

  return (
    <div className="recipe-page-hero">
      <p>{glass}</p>
      <MainPageTitle title={drink} />
      <img src={drinkThumb} alt={drink} loading="lazy" />
      <button>Add to favourite</button>

    </div>
  );
};

export default RecipePageHero;
