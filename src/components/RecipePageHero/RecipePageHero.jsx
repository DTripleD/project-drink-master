// import { useState } from "react";
// import AddToFavorite from "./AddToFavorite";
// import RemoveFromFavorite from "./RemoveFromFavorite";
import MainPageTitle from "../MainPageTitle/MainPageTitle";

// const RecipePageHero = ({ recipeData, isFavorite, onToggleFavorite }) => {

// eslint-disable-next-line react/prop-types
const RecipePageHero = ({ ingridients: { drink } }) => {
  //   const [isInFavorite, setIsInFavorite] = useState(isFavorite);

  //   const handleToggleFavorite = () => {
  //     onToggleFavorite(recipeData.id);
  //     setIsInFavorite(!isInFavorite);
  //   };

  return (
    <div className="recipe-page-hero">
      <MainPageTitle title={drink} />
      {/* <p className="recipe-description">{recipeData.description}</p>  */}
      {/* {isInFavorite ? (
        <RemoveFromFavorite onClick={handleToggleFavorite} />
      ) : (
        <AddToFavorite onClick={handleToggleFavorite} />
      )} */}
      {/* <p className="serving">{recipeData.serving}</p> */}
      {/* Інші додаткові деталі */}
    </div>
  );
};

export default RecipePageHero;
