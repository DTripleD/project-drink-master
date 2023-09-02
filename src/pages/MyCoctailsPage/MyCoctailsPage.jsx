import { useEffect } from "react";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
// import { Pagination } from "../../components/Pagination/Pagination";
import { RecipesList } from "../../components/RecipesList/RecipesList";
import { StyledSection } from "./MyCoctailsPage.styled";
import { MainContainer } from "../../components/MainContainer/MainContainer";

const MyCoctailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MainContainer>
        <StyledSection>
          <MainPageTitle title={"My recipes"} />
          <RecipesList />
          {/* <Pagination /> */}
        </StyledSection>
      </MainContainer>
    </>
  );
};

export default MyCoctailsPage;
