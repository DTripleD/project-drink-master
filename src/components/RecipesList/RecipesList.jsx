import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DrinkCard } from "../DrinkCard/DrinkCard";
import { selectOwn, selectPage } from "../../redux/Cocktails/coctailsSelectors";

import { getAllOwnDrinksThunk } from "../../redux/Cocktails/cocktailsOperations";
import useMediaRules from "../../hooks/useMediaRules";
import {
  MyRecipesListStyled,
  Section,
  MessageTitle,
} from "./RecipesList.styled";
import { ErrorPageWrapper } from "../../pages/ErrorPage/ErrorPage.styled";
import { getMyCoctails } from "../../shared/api/getMyCoctails";

export const RecipesList = () => {
  // const dispatch = useDispatch();
  // const { isDesktop } = useMediaRules();
  // const ownCocktails = useSelector(selectOwn);
  // const page = useSelector(selectPage);
  // const limit = isDesktop ? 9 : 8;

  const [own, setOwn] = useState(null);

  useEffect(() => {
    getMyCoctails().then((data) => setOwn(data));
  }, []);

  // useEffect(() => {
  //   // dispatch(getAllOwnDrinksThunk({ page, limit }));
  // }, [page, limit, dispatch]);

  return (
    <Section>
      {own ? (
        <MyRecipesListStyled>
          {own.map((ownCocktail) => (
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
          <MessageTitle>
            You haven't added any cocktail recipes yet
          </MessageTitle>
        </>
      )}
    </Section>
  );
};
