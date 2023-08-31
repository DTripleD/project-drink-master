import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Container } from "../../components/Container/Container";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { StyledSection } from "./FavoritePage.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectError,
  selectFavorites,
} from "../../redux/favorite/favorite-selector";
import { fetchFavorites } from "../../redux/favorite/favorite-operation";

import FavoriteList from "../../components/FavoriteList/FavoriteList";
import {
  ErrorText,
  ErrorPageWrapper,
  TextWrapper,
} from "../../pages/ErrorPage/ErrorPage.styled";

const FavoritePage = () => {
  const favoriteRecipe = useSelector(selectFavorites);
  const error = useSelector(selectError);
  const location = useLocation();
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <>
      <MainContainer>
        {/* <Container> */}
        <StyledSection>
          <MainPageTitle title={"Favorites"} />
          {isLoading && <p>Loading</p>}

          {favoriteRecipe?.length !== 0 ? (
            <FavoriteList
              recipes={favoriteRecipe}
              // allItem={allItem}
              location={location}
            >
              {/* {Children} */}
            </FavoriteList>
          ) : (
            <>
              <ErrorPageWrapper />
              <h3>You havent added any favorite cocktails yet</h3>
            </>
          )}

          {/* <Pagination /> */}
        </StyledSection>
        {/* </Container> */}
      </MainContainer>
    </>
  );
};

export default FavoritePage;
