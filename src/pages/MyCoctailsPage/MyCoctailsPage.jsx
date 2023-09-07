import { useEffect, useState } from "react";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import PaginationComponent from "../../components/Pagination/Pagination";
import { RecipesList } from "../../components/RecipesList/RecipesList";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { useSelector, useDispatch } from "react-redux";
import { selectOwn } from "../../redux/Cocktails/coctailsSelectors";
import {
  getAllOwnDrinksThunk,
  removeRecipeThunk,
} from "../../redux/Cocktails/cocktailsOperations";

const MyCoctailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const ownRecipe = useSelector(selectOwn);

  //------------------ Pagination
  const isDesktop = window.innerWidth >= 1440;
  const limit = isDesktop ? 9 : 8;

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    dispatch(getAllOwnDrinksThunk({ page: currentPage, limit: limit }))
      .unwrap()
      .then((res) => {
        setTotalPages(Math.ceil(res.totalHits / limit));
      });
  }, [dispatch, currentPage, limit]);

  const removeCocktail = (id) => {
    dispatch(removeRecipeThunk(id))
      .unwrap()
      .then((res) => {
        setTotalPages(Math.ceil(res.totalHits / limit));
      });
  };

  const changeNum = (_, num) => {
    setCurrentPage(num);
  };

  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;

  const currentItems = ownRecipe.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <MainContainer>
        <>
          <MainPageTitle title={"My recipes"} />

          {currentItems?.length !== 0 ? (
            <RecipesList
              removeCocktail={removeCocktail}
              currentItems={currentItems}
            />
          ) : (
            <></>
          )}
          {totalPages > 1 && (
            <PaginationComponent
              totalPages={totalPages}
              page={currentPage}
              changeNum={changeNum}
            />
          )}
        </>
      </MainContainer>
    </>
  );
};

export default MyCoctailsPage;
