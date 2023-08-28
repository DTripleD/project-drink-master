import { ReactComponent as Search } from "../../images/svg/search.svg";
import { useEffect, useState } from "react";
import {
	getCategoriesList,
	getIngredientsList,
} from "../../shared/api/addRecipePageQuery";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { StyledSelect } from "./DrinksSearch.styled";

const DrinksSearch = () => {
	const [categories, setCategories] = useState(["All categories"]);
	const [ingredients, setIngredients] = useState(["Ingredients"]);
	const { register, handleSubmit, control } = useForm();

	const onSubmit = (data) =>
		console.log(data.search, data.category.value, data.ingredients.value);

	useEffect(() => {
		const getCategories = async () => {
			const result = await getCategoriesList();
			setCategories(result);
		};
		const getIngredients = async () => {
			const result = await getIngredientsList();
			setIngredients(result);
		};

		getCategories();
		getIngredients();
	}, []);

	const optionCategories = categories.map((category) => ({
		value: category.toLowerCase(),
		label: category,
	}));

	const optionIngredients = ingredients.map((ingredient) => ({
		value: ingredient.toLowerCase(),
		label: ingredient,
	}));

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<button type="submit">
				<Search style={{ width: 20, height: 20 }} />
			</button>
			<input type="text" {...register("search")} placeholder="Enter the text" />
			<Controller
				control={control}
				name="category"
				render={({ field: { onChange, value } }) => (
					<StyledSelect
						defaultValue={optionCategories[0]}
						options={optionCategories}
						value={value}
						onChange={onChange}
						classNamePrefix={"select"}
					/>
				)}
			/>
			<Controller
				control={control}
				name="ingredients"
				render={({ field: { onChange, value } }) => (
					<StyledSelect
						defaultValue={optionIngredients[0]}
						options={optionIngredients}
						value={value}
						onChange={onChange}
						classNamePrefix={"select"}
					/>
				)}
			/>
		</form>
	);
};

export default DrinksSearch;
