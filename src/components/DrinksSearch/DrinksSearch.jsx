import React from "react";
import { ReactComponent as Search } from "../../images/svg/search.svg";
import DrinksList from "../../components/DrinksList/DrinksList";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
	getCategoriesList,
	getIngredientsList,
} from "../../shared/api/addRecipePageQuery";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { StyledSelect } from "./DrinksSearch.styled";
import { getDrinksList } from "../../shared/api/drinksSearch";

const DrinksSearch = () => {
	const [categories, setCategories] = useState(["All categories"]);
	const [ingredients, setIngredients] = useState(["Ingredients"]);
	const { register, handleSubmit, control } = useForm();
	const [searchParams, setSearchParams] = useSearchParams();
	const [drinks, setDrinks] = useState([]);
	const [error, seterror] = useState("");

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

	useEffect(() => {
		getDrinksList(searchParams)
			.then((data) => {
				setDrinks(data);
			})
			.catch((error) => {
				seterror(error.message);
			});
		console.log(drinks);
	}, []);

	useEffect(() => {
		getDrinksList(searchParams)
			.then((data) => {
				setDrinks(data);
			})
			.catch((error) => {
				seterror(error.message);
			});
		console.log(drinks);
	}, [searchParams]);

	const onSubmit = (data) => {
		setSearchParams({
			search: data?.search || "",
			category: data?.category?.label || "",
			ingredients: data?.ingredients?.label || "",
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<button type="submit">
					<Search style={{ width: 20, height: 20 }} />
				</button>
				<input
					type="text"
					{...register("search")}
					placeholder="Enter the text"
				/>
				<Controller
					control={control}
					name="category"
					render={({ field: { onChange, value } }) => (
						<StyledSelect
							defaultValue={optionCategories[2]}
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
			<DrinksList drinks={drinks} />
		</>
	);
};

export default DrinksSearch;
