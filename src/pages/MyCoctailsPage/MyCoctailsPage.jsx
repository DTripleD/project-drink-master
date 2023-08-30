import { useEffect } from "react";
import { Container } from "../../components/Container/Container";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
// import { Pagination } from "../../components/Pagination/Pagination";
import { RecipesList } from "../../components/RecipesList/RecipesList";
import { StyledSection } from "./MyCoctailsPage.styled";

const MyCoctailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container>
        <StyledSection>
          <MainPageTitle title={"My recipes"} />
          <RecipesList />
          {/* <Pagination /> */}
        </StyledSection>
      </Container>
    </>
  );
};

export default MyCoctailsPage;
