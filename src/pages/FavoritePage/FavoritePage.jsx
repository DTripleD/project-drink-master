import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Children } from "react";

import { Container } from "../../components/Container/Container";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { StyledSection } from "./FavoritePage.styled";

import FavoriteList from "../../components/FavoriteList/FavoriteList";
import {
  ErrorText,
  ErrorPageWrapper,
  TextWrapper,
} from "../../pages/ErrorPage/ErrorPage.styled";
// import { DrinkCard } from "../../components/DrinkCard/DrinkCard";
// import { Pagination } from "../../components/Pagination/Pagination";
// import { RecipesList } from "../../components/RecipesList/RecipesList";

import {
  getFavoriteList,
  deleteFavoriteRecipe,
} from "../../shared/api/favoriteRecipe";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  return [state, setState];
};

const FavoritePage = () => {
  const location = useLocation();
  const [favoriteRecipe, setFavoriteRecipe] = useLocalStorage(
    "favoriteRecipe",
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [allPage, setAllPage] = useState();
  // const [allItem, setAllItem] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getFavoriteList();
        if (data.message) {
          return favoriteRecipe;
        }
        setFavoriteRecipe(data); // Обновление состояния с полученными данными
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDeleteRecipe = async (recipeId) => {
    try {
      // Отправляем запрос на бэкенд для удаления рецепта
      const response = await deleteFavoriteRecipe(recipeId);
      if (response.status === 200) {
        // Обновляем состояние favoriteRecipe, убрав удаленный рецепт
        const updatedRecipes = favoriteRecipe.filter(
          (recipe) => recipe._id !== recipeId
        );
        setFavoriteRecipe(updatedRecipes);
      }
    } catch (error) {
      setError("Failed to delete recipe");
    }
  };

  useEffect(() => {
    // Сохранение данных в localStorage при изменении favoriteRecipe
    try {
      window.localStorage.setItem(
        "favoriteRecipe",
        JSON.stringify(favoriteRecipe)
      );
    } catch (error) {
      // Обработка ошибок сохранения в localStorage
      console.error("Error saving data to localStorage:", error);
    }
  }, [favoriteRecipe]);

  return (
    <>
      <MainContainer>
        {/* <Container> */}
        <StyledSection>
          <MainPageTitle title={"Favorites"} />
          {favoriteRecipe?.length !== 0 ? (
            <FavoriteList
              recipes={favoriteRecipe}
              // allItem={allItem}
              // location={location}
              deleteFavorite={handleDeleteRecipe}
            >
              {/* {Children} */}
            </FavoriteList>
          ) : (
            <>
              <ErrorPageWrapper />
              <h3>You haven't added any favorite cocktails yet</h3>
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
