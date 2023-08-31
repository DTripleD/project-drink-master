import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DrinkCard } from "../DrinkCard/DrinkCard";
import { selectOwn, selectPage } from "../../redux/Cocktails/coctailsSelectors";

import { getAllOwnDrinksThunk } from "../../redux/Cocktails/cocktailsOperations";
import useMediaRules from "../../hooks/useMediaRules";
import { MyRecipesListStyled, Section } from "./RecipesList.styled";
import { ErrorPageWrapper } from "../../pages/ErrorPage/ErrorPage.styled";

export const RecipesList = () => {
  const dispatch = useDispatch();
  const { isDesktop } = useMediaRules();
  const ownCocktails = useSelector(selectOwn);
  const page = useSelector(selectPage);
  const limit = isDesktop ? 9 : 8;

  useEffect(() => {
    dispatch(getAllOwnDrinksThunk({ page, limit }));
  }, [page, limit, dispatch]);

  return (
    <Section>
      {ownCocktails.length !== 0 ? (
        <MyRecipesListStyled>
          {ownCocktails.map((ownCocktail) => (
            <DrinkCard
              key={ownCocktail._id}
              page={"my"}
              cocktail={ownCocktail}
            />
          ))}
        </MyRecipesListStyled>
      ) : (
        <>
          <ErrorPageWrapper />
          <h3>You haven't added any cocktail recipes yet</h3>
        </>
      )}
    </Section>
  );
};
