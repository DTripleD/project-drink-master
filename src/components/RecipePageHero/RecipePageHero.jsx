// import { useState } from "react";
// import AddToFavorite from "./AddToFavorite";
// import RemoveFromFavorite from "./RemoveFromFavorite";
import MainPageTitle from "../MainPageTitle/MainPageTitle";

// const RecipePageHero = ({ recipeData, isFavorite, onToggleFavorite }) => {

// eslint-disable-next-line react/prop-types
const RecipePageHero = ({
  ingridients: { drink, glass, drinkThumb, description },
}) => {
  //   const [isInFavorite, setIsInFavorite] = useState(isFavorite);

  //   const handleToggleFavorite = () => {
  //     onToggleFavorite(recipeData.id);
  //     setIsInFavorite(!isInFavorite);
  //   };

  return (
    <div className="recipe-page-hero">
      <p>{glass}</p>
      <MainPageTitle title={drink} />
      <p>
        {description} || Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Praesentium debitis optio deserunt dignissimos commodi nisi
        expedita itaque dolor provident. Atque labore, corrupti totam
        accusantium omnis alias vero. Itaque eos ullam aut rerum quam. Non
        temporibus vel dolore similique, suscipit amet.
      </p>
      <img src={drinkThumb} alt={drink} loading="lazy" />
      {/* <button>Add to favourite</button> */}
    </div>
  );
};

export default RecipePageHero;
