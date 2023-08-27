import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCoctails } from "../../redux";
// import { getCocktailsByCategoryThunk } from "../../redux";
// import { PreviewDrinks } from "../../components/PreviewDrinks/PreviewDrinks";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { OtherDrinksButton } from "../../components/Button/OtherDrinksButton/OtherDrinks";

const MainPage = () => {
  //   const dispatch = useDispatch();
  //   const category = useSelector(selectCoctails);

  //   const ordinaryDrink = category.filter((item) => {
  //     return item.category === "Ordinary Drink";
  //   });

  //   const cocktail = category.filter((item) => {
  //     return item.category === "Coctail";
  //   });

  //   const shake = category.filter((item) => {
  //     return item.category === "Shake";
  //   });

  //   const other = category.filter((item) => {
  //     return item.category === "Other/Unknow";
  //   });

  //   useEffect(() => {
  //     if (category !== undefined && category.length === 0)
  //       dispatch(getCocktailsByCategoryThunk());
  //   }, []); //eslint-disable-line

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />

      <OtherDrinksButton />
      {/* {category !== undefined && (
        <>
          <PreviewDrinks title="Ordinary Drink" data={ordinaryDrink} />
          <PreviewDrinks title="Cocktail" data={cocktail} />
          <PreviewDrinks title="Shake" data={shake} />
          <PreviewDrinks title="Other/Unknown" data={other} />
          
        </>
      )} */}
    </>
  );
};

export default MainPage;
