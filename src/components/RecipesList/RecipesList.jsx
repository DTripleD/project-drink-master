import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
import PaginationComponent from "../../components/Pagination/Pagination";

export const RecipesList = () => {
  const [loading, setLoading] = useState(true);
  const [own, setOwn] = useState([]);
  const dispatch = useDispatch();

  const cocktailsStatus = useSelector((state) => state.cocktails.status);
  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);
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

    getMyCoctails(searchParams)
      .then(({ data }) => {
        setOwn(data.cocktails);
        setLoading(false);
        setTotalPages(Math.ceil(data.totalHits / itemsPerPage));
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [searchParams]);

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
        getMyCoctails(searchParams)
          .then(({ data }) => {
            if (data.cocktails.length === 0 && page !== 1) {
              const num = 1;
              updatedParams.set("page", num.toString());
              setSearchParams(updatedParams);
              setPage(num);
            }
            setOwn(data.cocktails);
            // setError(data);
            setTotalPages(Math.ceil(data.totalHits / itemsPerPage));
          })
          .catch((error) => {
            console.log("error", error);
          });
      });
  };

  const changeNum = (_, num) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    updatedParams.set("page", num.toString());
    setSearchParams(updatedParams);
    setPage(num);
  };

  return (
    <Section>
      {(loading && <Loader />) || (
        <>
          {own.length > 0 ? (
            <>
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
              {totalPages > 1 && (
                <PaginationComponent
                  totalPages={totalPages}
                  page={page}
                  changeNum={changeNum}
                />
              )}
            </>
          ) : (
            <>
              <ErrorPageWrapper />
              <MessageTitle>
                You haven't added any cocktail recipes yet
              </MessageTitle>
            </>
          )}
        </>
      )}
    </Section>
  );
};
