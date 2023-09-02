import { useEffect, useState } from "react";
import { PreviewDrinks } from "../../components/PreviewDrinks/PreviewDrinks";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { OtherDrinksButton } from "../../components/Button/OtherDrinksButton/OtherDrinks";
import { getMainPage } from "../../shared/api/addRecipePageQuery";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { CircularProgress } from "@mui/material";

const MainPage = () => {
  // const dispatch = useDispatch();

  const [categories, setCategories] = useState(null);
  const [object, setObject] = useState(null);

  useEffect(() => {
    getMainPage().then((data) => {
      setObject(data);
      uniqueCategoties(data);
    });
  }, []);

  const uniqueCategoties = (data) => {
    const categories = data.flatMap((item) => item.category);
    const uniqueCategoties = categories.filter(
      (category, index, array) => array.indexOf(category) === index
    );
    setCategories(uniqueCategoties);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <MainContainer>
        {categories ? (
          categories.map((f) => (
            <PreviewDrinks
              title={f}
              key={f}
              data={object.filter((da) => da.category === f)}
            />
          ))
        ) : (
          <CircularProgress size={100} />
        )}

        <OtherDrinksButton />
      </MainContainer>
    </>
  );
};

export default MainPage;
