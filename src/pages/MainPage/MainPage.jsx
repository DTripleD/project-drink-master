import { useEffect, useState } from "react";
import { PreviewDrinks } from "../../components/PreviewDrinks/PreviewDrinks";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { OtherDrinksButton } from "../../components/Button/OtherDrinksButton/OtherDrinks";
import { getMainPage } from "../../shared/api/addRecipePageQuery";

const MainPage = () => {
  // const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [object, setObject] = useState([]);

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

  return (
    <>
      <HeroSection />
      {categories.map((f) => (
        <PreviewDrinks
          title={f}
          key={f}
          data={object.filter((da) => da.category === f)}
        />
      ))}
      <OtherDrinksButton />
    </>
  );
};

export default MainPage;
