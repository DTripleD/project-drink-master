import { useEffect } from "react";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";

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
        </>
      </MainContainer>
    </>
  );
};

export default MyCoctailsPage;
