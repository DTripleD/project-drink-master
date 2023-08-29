import { useEffect, useState } from "react";
import { Container } from "../../components/Container/Container";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { StyledSection } from "./FavoritePage.styled";
import { AddButton } from "../../components/Button/AddButton/AddButton";
import { SeeButton } from "../../components/Button/SeeButton/SeeButton";
// import { DrinkCard } from "../../components/DrinkCard/DrinkCard";
// import { Pagination } from "../../components/Pagination/Pagination";
// import { RecipesList } from "../../components/RecipesList/RecipesList";

import { getFavoriteList } from "../../redux/favorite/favorite-operation";

const FavoritePage = () => {
  const [favoriteRecipe, setFavoriteRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getFavoriteList();
        if (data.message) {
          return favoriteRecipe;
        }
        console.log("data", data);
        setFavoriteRecipe(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <MainContainer>
        <Container>
          <StyledSection>
            <MainPageTitle title={"Favorites"} />

            {favoriteRecipe?.length !== 0 ? (
              <ul>
                {favoriteRecipe.map(
                  ({
                    _id,
                    drink,
                    description = "good coctail",
                    drinkThumb,
                  }) => (
                    <li key={_id} page={"favorite"}>
                      {_id}
                      {drink}
                      {description}
                      <img
                        src={drinkThumb}
                        alt={drink}
                        width="100"
                        height="150"
                      />

                      <SeeButton />
                      <AddButton />
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p>No favorite recipes have been added yet.</p>
            )}

            {/* <RecipesList /> */}
            {/* <Pagination /> */}
          </StyledSection>
        </Container>
      </MainContainer>
    </>
  );
};

export default FavoritePage;
