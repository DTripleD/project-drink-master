import { MainContainer } from "../../components/MainContainer/MainContainer";
import DrinksSearch from "../../components/DrinksSearch/DrinksSearch";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";

const DrinksPage = () => {
	return (
		<div>
			<MainContainer>
				<MainPageTitle title="Drinks"></MainPageTitle>
				<DrinksSearch />
			</MainContainer>
		</div>
	);
};

export default DrinksPage;
