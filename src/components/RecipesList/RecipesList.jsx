import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeRecipeThunk } from "../../redux/Cocktails/cocktailsOperations";
import Loader from "../Loader/Loader";
import { DrinkCard } from "../DrinkCard/DrinkCard";
import {
  MyRecipesListStyled,
  Section,
  MessageTitle,
} from "./RecipesList.styled";
import { ErrorPageWrapper } from "../../pages/ErrorPage/ErrorPage.styled";
import { unwrapResult } from "@reduxjs/toolkit";
import { getMyCoctails } from "../../shared/api/getMyCoctails";

export const RecipesList = () => {
  const [loading, setLoading] = useState(true);
  const [own, setOwn] = useState([]);
  const dispatch = useDispatch();
  const cocktailsStatus = useSelector((state) => state.cocktails.status);
  useEffect(() => {
    getMyCoctails()
      .then((res) => setOwn(res.data.cocktails))
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (cocktailsStatus === "idle") {
      dispatch(removeRecipeThunk())
        .then(unwrapResult)
        .then(() => setLoading(false));
    }
  }, [cocktailsStatus, dispatch]);

  const handleDeleteCocktail = (cocktailId) => {
    dispatch(removeRecipeThunk(cocktailId))
      .then(unwrapResult)
      .then(() => {
        setOwn((prevOwn) =>
          prevOwn.filter((cocktail) => cocktail._id !== cocktailId)
        );
      });
  };

  return (
    <Section>
      {loading ? (
        <Loader />
      ) : own.length > 0 ? (
        <MyRecipesListStyled>
          {own.map((ownCocktail) => (
            <DrinkCard
              key={ownCocktail._id}
              page="my"
              cocktail={ownCocktail}
              removeCocktail={() => handleDeleteCocktail(ownCocktail._id)}
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
