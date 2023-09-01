import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites } from "../../redux/favorite/favorite-operation";
import {
  selectIsLoading,
  selectError,
  selectFavorites,
} from "../../redux/favorite/favorite-selector";
import useMediaRules from "../../hooks/useMediaRules";

import FavoriteItem from "../FavoriteItem/FavoriteItem";

import { ErrorPageWrapper } from "../../pages/ErrorPage/ErrorPage.styled";
import {
  MyRecipesListStyled,
  Section,
  MessageTitle,
} from "../../components/RecipesList/RecipesList.styled";

const FavoriteList = () => {
  const dispatch = useDispatch();
  const { isDesktop } = useMediaRules();
  const favoriteRecipe = useSelector(selectFavorites);

  const error = useSelector(selectError);
  //   const location = useLocation();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <Section>
      {(isLoading && <MessageTitle>Loading...</MessageTitle>) || (
        <>
          {favoriteRecipe?.length !== 0 ? (
            <MyRecipesListStyled>
              {favoriteRecipe.map((recipe) => (
                <li key={recipe._id}>
                  <FavoriteItem
                    recipe={recipe}
                    page={"favorite"}
                    cocktail={recipe}
                  />
                </li>
              ))}
            </MyRecipesListStyled>
          ) : (
            <>
              <ErrorPageWrapper />
              <MessageTitle>
                You havent added any favorite cocktails yet
              </MessageTitle>
            </>
          )}
        </>
      )}

      {error && <p>Sorry. {error} 😭</p>}
    </Section>
  );
};

export default FavoriteList;
