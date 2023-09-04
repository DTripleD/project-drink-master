import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites } from "../../redux/favorite/favorite-operation";
import {
  selectIsLoading,
  selectError,
  selectFavorites,
} from "../../redux/favorite/favorite-selector";

import FavoriteItem from "../FavoriteItem/FavoriteItem";
import { ErrorPageWrapper } from "../../pages/ErrorPage/ErrorPage.styled";
import {
  MyRecipesListStyled,
  Section,
  MessageTitle,
} from "../../components/RecipesList/RecipesList.styled";
import PaginationComponent from "../Pagination/Pagination";

const FavoriteList = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const favoriteRecipe = useSelector(selectFavorites);
  const error = useSelector(selectError);

  const isLoading = useSelector(selectIsLoading);

  //------------------ Pagination

  //определяем кол-во єлементов на странице
  // console.log("favoriteRecipe", favoriteRecipe);

  const [totalPages, setTotalPages] = useState(favoriteRecipe);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    const width = window.innerWidth;
    if (width >= 1440) {
      return 9;
    } else {
      return 10;
    }
  });

  const [searchParams, setSearchParams] = useSearchParams({
    page: page,
    limit: itemsPerPage,
  });
  const updatedParams = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    const newPage = parseInt(searchParams.get("page")) || 1;
    if (newPage !== page) {
      setPage(newPage);
    }

    dispatch(fetchFavorites(searchParams))
      .then(({ payload }) => {
        window.scrollTo(0, 0);
        setTotalPages(Math.ceil(payload.totalHits / itemsPerPage));
      })
      .catch((error) => {
        console.log("error", error);
        // setError(error.message);
      });
  }, [dispatch, searchParams, page, itemsPerPage]);

  useEffect(() => {
    const handleWindowResize = () => {
      const width = window.innerWidth;

      if (width >= 1440) {
        setItemsPerPage(9);
      } else {
        setItemsPerPage(10);
      }
    };
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const changeNum = (_, num) => {
    updatedParams.set("page", num.toString());

    setSearchParams(updatedParams);
    setPage(num);
  };

  //---------------------------------------

  return (
    <Section>
      {(isLoading && (
        <>
          <MessageTitle>Loading...</MessageTitle>
          <ErrorPageWrapper />
        </>
      )) || (
        <>
          {favoriteRecipe?.length !== 0 ? (
            <MyRecipesListStyled>
              {favoriteRecipe.map((recipe) => (
                <li key={recipe._id}>
                  <FavoriteItem
                    recipe={recipe}
                    page={"favorite"}
                    cocktail={recipe}
                    searchParams={searchParams}
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
      {totalPages > 1 && (
        <PaginationComponent
          totalPages={totalPages}
          page={page}
          changeNum={changeNum}
        />
      )}
    </Section>
  );
};

export default FavoriteList;
