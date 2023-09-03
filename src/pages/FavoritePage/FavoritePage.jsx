import { useEffect } from "react";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import { StyledSection } from "./FavoritePage.styled";

const FavoritePage = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <MainContainer>
        <StyledSection>
          <MainPageTitle title={"Favorites"} />
          <FavoriteList />

          {/* <Pagination /> */}
        </StyledSection>
      </MainContainer>
    </>
  );
};

export default FavoritePage;
