import { useEffect } from "react";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import PaginationComponent from "../../components/Pagination/Pagination";
import { RecipesList } from "../../components/RecipesList/RecipesList";

import { MainContainer } from "../../components/MainContainer/MainContainer";

const MyCoctailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MainContainer>
        <>
          <MainPageTitle title={"My recipes"} />
          <RecipesList />
          {/* <PaginationComponent /> */}
        </>
      </MainContainer>
    </>
  );
};

export default MyCoctailsPage;
