import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavorites,
  deleteFavorite,
} from "../../redux/favorite/favorite-operation";
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
import Loader from "../Loader/Loader";

const FavoriteList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const favoriteRecipe = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);

  //------------------ Pagination
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    const width = window.innerWidth;

    if (width >= 1440) {
      return 9;
    } else {
      return 8;
    }
  });

  useEffect(() => {
    const handleWindowResize = () => {
      const width = window.innerWidth;

      if (width >= 1440) {
        setItemsPerPage(9);
      } else {
        setItemsPerPage(8);
      }
    };
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  const [currentPage, setCurrentPage] = useState(1);

  //определяем кол-во єлементов на странице

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = favoriteRecipe.slice(indexOfFirstItem, indexOfLastItem);

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    dispatch(fetchFavorites());
    setTotalPages(Math.ceil(favoriteRecipe.length / itemsPerPage));
  }, []);

  // console.log("favoriteRecipe", favoriteRecipe);

  const handleDeleteFavorite = (id) => {
    dispatch(deleteFavorite(id))
      .unwrap()
      .then((res) => {
        setTotalPages(Math.ceil(res.totalHits / itemsPerPage));
      });
  };

  const changeNum = (_, num) => {
    setCurrentPage(num);
  };

  //---------------------------------------

  return (
    <Section>
      {(isLoading && <Loader />) || (
        <>
          {currentItems?.length !== 0 ? (
            <MyRecipesListStyled>
              {currentItems.map((recipe) => (
                <li key={recipe._id}>
                  <FavoriteItem
                    recipe={recipe}
                    page={"favorite"}
                    cocktail={recipe}
                    removeCocktail={handleDeleteFavorite}
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
          page={currentPage}
          changeNum={changeNum}
        />
      )}
    </Section>
  );
};

export default FavoriteList;
