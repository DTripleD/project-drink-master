import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import {
	getCategoriesList,
	getGlassesList,
} from "../../../shared/api/addRecipePageQuery";
import {
	StyledInput,
	AddImageButton,
	AddImageTitle,
} from "./RecipeDescriptionFields.styled";
import { ReactComponent as Plus } from "../../../images/svg/add-photo.svg";

const RecipeDescriptionFields = ({ register }) => {
	const [image, setImage] = useState(null);
	const [categories, setCategories] = useState([]);
	const [glasses, setGlasses] = useState([]);

	useEffect(() => {
		const getCategories = async () => {
			const result = await getCategoriesList();
			setCategories(result);
		};

		const getGlasses = async () => {
			const result = await getGlassesList();
			setGlasses(result);
		};

		getCategories();
		getGlasses();
	}, []);

	const optionCategories = categories.map((category) => ({
		value: category.toLowerCase(),
		label: category,
	}));

	const optionGlasses = glasses.map((glass) => ({
		value: glass.toLowerCase(),
		label: glass,
	}));

	const { control } = useForm({
		defaultValues: {
			category: {},
		},
	});

	return (
		<>
			<StyledInput>
				<input
					name="drinkThumb"
					id="drinkThumb"
					type="file"
					placeholder="Add image"
					hidden
				/>
				<AddImageButton htmlFor="drinkThumb">
					<Plus style={{ width: 28, height: 28 }} />
				</AddImageButton>
				<AddImageTitle>Add image</AddImageTitle>
			</StyledInput>
			<input
				{...register("drink")}
				type="text"
				placeholder="Enter item title"
			/>
			<input
				{...register("description")}
				type="text"
				placeholder="Enter about recipe"
			/>
			<Controller
				control={control}
				name="category"
				defaultValue={optionCategories[0]}
				render={({ field: { onChange, value } }) => (
					<Select
						// {...field}
						options={optionCategories}
						value={value}
						onChange={onChange}
						placeholder="Category"
					/>
				)}
			/>
			{/* <Select options={optionCategories} />
			<Select options={optionGlasses} /> */}
		</>
	);
};

RecipeDescriptionFields.propTypes = {
	register: PropTypes.func.isRequired,
};

export default RecipeDescriptionFields;
