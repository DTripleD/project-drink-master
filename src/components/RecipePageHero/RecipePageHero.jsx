// import  { useState } from 'react';
// // import RecipePageTitle from './RecipePageTitle';
// // import AddToFavorite from './AddToFavorite';
// // import RemoveFromFavorite from './RemoveFromFavorite';

// const RecipePageHero = ({ recipeData, isFavorite, onToggleFavorite }) => {
//   const [isInFavorite, setIsInFavorite] = useState(isFavorite);

//   const handleToggleFavorite = () => {
//     onToggleFavorite(recipeData.id);
//     setIsInFavorite(!isInFavorite);
//   };

//   return (
//     <div className="recipe-page-hero">
//       <RecipePageTitle title={recipeData.title} />
//       <p className="recipe-description">{recipeData.description}</p>
//       {isInFavorite ? (
//         <RemoveFromFavorite onClick={handleToggleFavorite} />
//       ) : (
//         <AddToFavorite onClick={handleToggleFavorite} />
//       )}
//       <p className="serving">{recipeData.serving}</p>
//       {/* Інші додаткові деталі */}
//     </div>
//   );
// };

// export default RecipePageHero;