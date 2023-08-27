import { ReactComponent as Search } from "../../images/svg/search.svg";

const DrinksSearch = () => {
	return (
		<>
			{" "}
			<form>
				<button type="submit">
					<Search />
				</button>
				<Search />
			</form>
		</>
	);
};

export default DrinksSearch;
