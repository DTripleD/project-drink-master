import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import RecipeDescriptionFields from "./RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "./RecipeIngredientsFields/RecipeIngredientsFields";
import { useDispatch } from "react-redux";
import {
	getCategories,
	getGlasses,
	getIngredients,
} from "../../redux/drinks/drinksOperations";

const AddRecipeForm = (props) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
		dispatch(getGlasses());
		dispatch(getIngredients());
	}, [dispatch]);

	const [file, setFile] = useState(null);

	const getFile = (file) => {
		setFile(file);
	};

	const [ingredientsList, setIngredientsList] = useState([]);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const formData = new FormData();

	const onSubmit = (data) => {
		console.log(data);
		formData.append("drink", data.drink);
		formData.append("description", data.description);
		formData.append("category", data.category);
		formData.append("glass", data.glass);
		formData.append("drinkThumb", file);

		for (var pair of formData.entries()) {
			console.log(pair[0] + ", " + pair[1]);
		}
	};

	const isFirtsRender = useRef(true);

	useEffect(() => {
		if (isFirtsRender.current) {
			isFirtsRender.current = false;
			return;
		}
		// console.log(errors?.drinkThumb?.message);
		// console.log(errors?.drink?.message);
		// console.log(errors?.description?.message);
		// console.log(errors?.category?.message);
		// console.log(errors?.glass?.message);
	}, [errors]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<RecipeDescriptionFields
				getFile={getFile}
				register={register}
				control={control}
			/>
			<RecipeIngredientsFields
				register={register}
				control={control}
				ingredientsList={ingredientsList}
				setIngredientsList={setIngredientsList}
			/>
			<button type="submit">Add</button>
		</form>
	);
};

AddRecipeForm.propTypes = {};

export default AddRecipeForm;
