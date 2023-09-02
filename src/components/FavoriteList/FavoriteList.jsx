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
// import { Container, Pagination, Stack } from "@mui/material";

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

  // _________________________________
  //   const [searchParams, setSearchParams] = useSearchParams();
  //------------------ Pagination

  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [allPage, setAllPage] = useState();
  //   const [allItem, setAllItem] = useState();
  //   //-----------------------------------
  //   useEffect(() => {
  //     const handleWindowResize = () => {
  //       const width = window.innerWidth;

  //       if (width >= 1304) {
  //         setItemsPerPage(12);
  //       } else {
  //         setItemsPerPage(6);
  //       }
  //     };
  //     window.addEventListener("resize", handleWindowResize);

  //     return () => window.removeEventListener("resize", handleWindowResize);
  //   }, []);

  //   const [itemsPerPage, setItemsPerPage] = useState(() => {
  //     const width = window.innerWidth;

  //     if (width >= 1440) {
  //       return 12;
  //     } else {
  //       return 6;
  //     }
  //   });
  //   const changeNum = (_, num) => {
  //     updatedParams.set("page", num.toString());
  //     setSearchParams(updatedParams);
  //     setPage(num);
  //   };

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
            <>
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
              {/* {totalPages > 1 && (
                <Container>
                  <Stack spacing={2}>
                    <Pagination
                      count={totalPages}
                      page={page}
                      onChange={changeNum}
                      siblingCount={1}
                      sx={{ marginY: 3, marginX: "auto" }}
                    />
                  </Stack>
                </Container>
              )} */}
            </>
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
