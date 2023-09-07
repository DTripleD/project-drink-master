import { useEffect } from "react";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import { useState } from "react";
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
import PaginationComponent from "../../components/Pagination/Pagination";
import {
  Section,
  MessageTitle,
} from "../../components/RecipesList/RecipesList.styled";
import { ErrorPageWrapper } from "../../pages/ErrorPage/ErrorPage.styled";
import { toast } from "react-hot-toast";

const FavoritePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
  }, [dispatch]);

  useEffect(() => {
    if (currentItems.length === 0 && currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [totalPages, currentPage]);

  const handleDeleteFavorite = (id) => {
    toast.success("Deleting...");
    dispatch(deleteFavorite(id))
      .unwrap()
      .then((res) => {
        setTotalPages(Math.ceil(res.totalHits / itemsPerPage));
      })
      .then(() => toast.success("Delete success!"));
  };

  const changeNum = (_, num) => {
    setCurrentPage(num);
  };

  return (
    <>
      <MainContainer>
        <>
          <MainPageTitle title={"Favorites"} />
          {/* {currentItems.length === 0 } */}
          {favoriteRecipe?.length !== 0 ? (
            <FavoriteList
              handleDeleteFavorite={handleDeleteFavorite}
              currentItems={currentItems}
            />
          ) : (
            <Section>
              <ErrorPageWrapper />
              <MessageTitle>
                You havent added any favorite cocktails yet
              </MessageTitle>
            </Section>
          )}
          {totalPages > 1 && (
            <PaginationComponent
              totalPages={totalPages}
              page={currentPage}
              changeNum={changeNum}
            />
          )}
          {/* <Pagination /> */}
        </>
      </MainContainer>
    </>
  );
};

export default FavoritePage;
