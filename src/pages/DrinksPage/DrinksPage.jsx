import DrinksList from "../../components/DrinksList/DrinksList";
import DrinksSearch from "../../components/DrinksSearch/DrinksSearch";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";

const DrinksPage = () => {
	return (
		<div>
			<MainPageTitle title="Drinks"></MainPageTitle>
			<DrinksSearch />
			<DrinksList />
		</div>
	);
};

export default DrinksPage;
