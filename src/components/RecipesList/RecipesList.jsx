// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { DrinkCard } from "../DrinkCard/DrinkCard";
// import { NotFound } from "../components/";
// import { selectOwn } from "../../redux/selectors";
// import { selectPage } from "../../redux/selectors";
// import { getAllOwnThunk } from "../../redux/drinks/operations";
// import { useMediaRules } from "../../hooks/useMediaRules";
// import { MyRecipesListStyled, Section } from "./RecipesList.styled";

// export const RecipesList = () => {
//   const dispatch = useDispatch();
//   const { isDesktop } = useMediaRules();
//   const ownCocktails = useSelector(selectOwn);
//   const page = useSelector(selectPage);
//   const limit = isDesktop ? 9 : 8;

//   useEffect(() => {
//     dispatch(getAllOwnThunk({ page, limit }));
//   }, [page, limit, dispatch]);

//   return (
//     <Section>
//       {ownCocktails.length !== 0 ? (
//         <MyRecipesListStyled>
//           {ownCocktails.map((ownCocktail) => (
//             <DrinkCard
//               key={ownCocktail._id}
//               page={"my"}
//               cocktail={ownCocktail}
//             />
//           ))}
//         </MyRecipesListStyled>
//       ) : (
//         <NotFound message={"You haven't added any cocktail recipes yet"} />
//       )}
//     </Section>
//   );
// };
