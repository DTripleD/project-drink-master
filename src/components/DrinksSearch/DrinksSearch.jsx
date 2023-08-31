import React from "react";
import { ReactComponent as Search } from "../../images/svg/search.svg";
import DrinksList from "../../components/DrinksList/DrinksList";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
	getCategoriesList,
	getIngredientsList,
} from "../../shared/api/addRecipePageQuery";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import {
	StyledSelect,
	Form,
	Button,
	InputContainer,
	Input,
} from "./DrinksSearch.styled";
import { getDrinksList } from "../../shared/api/drinksSearch";

const DrinksSearch = () => {
	const { state } = useLocation();
	const [categories, setCategories] = useState(
		state?.category ? [state?.category] : ["Cocktail"]
	);
	const [ingredients, setIngredients] = useState(["Ingredients"]);
	const { register, handleSubmit, control } = useForm();
	const [searchParams, setSearchParams] = useSearchParams({
		search: "",
		category: state?.category ? state?.category : "Cocktail",
		ingredients: "",
	});
	const [data, setData] = useState([]);
	const [error, setError] = useState("");

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

	useEffect(() => {
		getDrinksList(searchParams)
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				setError(error.message);
			});
		console.log(data);
	}, [searchParams]);

	const optionCategories = categories.map((category) => ({
		value: category,
		label: category,
	}));

	const optionIngredients = ingredients.map((ingredient) => ({
		value: ingredient,
		label: ingredient,
	}));

	const onSubmit = (data) => {
		setSearchParams({
			search: data?.search || "",
			category: data?.category?.label || state?.category || "",
			ingredients: data?.ingredients?.label || "",
		});
	};

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<Input
						type="text"
						{...register("search")}
						placeholder="Enter the text"
					/>
					<Button type="submit">
						<Search style={{ width: 20, height: 20 }} />
					</Button>
				</InputContainer>
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
			</Form>
			{error && <p>Sorry. {error} 😭</p>}
			<DrinksList drinks={data.drinks} />
		</>
	);
};

export default DrinksSearch;
