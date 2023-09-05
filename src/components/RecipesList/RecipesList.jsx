import { useEffect, useState } from "react";

import { DrinkCard } from "../DrinkCard/DrinkCard";

import {
  MyRecipesListStyled,
  Section,
  MessageTitle,
} from "./RecipesList.styled";
import { ErrorPageWrapper } from "../../pages/ErrorPage/ErrorPage.styled";
import { getMyCoctails } from "../../shared/api/getMyCoctails";
import Loader from "../Loader/Loader";

export const RecipesList = () => {
  const [own, setOwn] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyCoctails()
      .then((res) => setOwn(res.data.cocktails))
      .then(() => setLoading(false));
  }, []);

  return (
    <Section>
      {loading ? (
        <Loader />
      ) : own.length > 0 ? (
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
