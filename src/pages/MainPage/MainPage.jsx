import { useEffect, useState } from "react";
import { PreviewDrinks } from "../../components/PreviewDrinks/PreviewDrinks";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { OtherDrinksButton } from "../../components/Button/OtherDrinksButton/OtherDrinks";
import { getCategoriesList } from "../../shared/api/addRecipePageQuery";

const MainPage = () => {
  // const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const result = await getCategoriesList();
      setCategories(result);
    };

    getCategories();
  }, []);
  // const category = useSelector(selectCoctails);

  const ordinaryDrink = categories.filter((item) => {
    return item.categories === "Ordinary Drink";
  });

  const cocktail = categories.filter((item) => {
    return item.categories === "Coctail";
  });

  const shake = categories.filter((item) => {
    return item.categories === "Shake";
  });

  const other = categories.filter((item) => {
    return item.categories === "Other/Unknow";
  });

  return (
    <>
      {categories !== undefined && (
        <>
          <HeroSection />
          <PreviewDrinks title="Ordinary Drink" data={ordinaryDrink} />
          <PreviewDrinks title="Cocktail" data={cocktail} />
          <PreviewDrinks title="Shake" data={shake} />
          <PreviewDrinks title="Other/Unknown" data={other} />
          <OtherDrinksButton />
        </>
      )}
    </>
  );
};

export default MainPage;
