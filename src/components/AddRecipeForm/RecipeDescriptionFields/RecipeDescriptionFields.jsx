import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { Controller } from "react-hook-form";
import {
	getCategoriesList,
	getGlassesList,
} from "../../../shared/api/addRecipePageQuery";
import {
	Container,
	AddImageButtonContainer,
	Image,
	StyledImageInput,
	AddImageButton,
	AddImageTitle,
	InputContainer,
	StyledInput,
	SelectContainer,
	StyledSelect,
} from "./RecipeDescriptionFields.styled";
import { ReactComponent as Plus } from "../../../images/svg/add-photo.svg";

const RecipeDescriptionFields = ({ getFile, register, control }) => {
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

	const handleUploadClick = (event) => {

		const file = event.target.files[0];
	
		const reader = new FileReader();
		if (file) {
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				setImage(reader.result);
				getFile(file);
			};
		}
	};

	const getValue = (value, options) => {
		value ? options.find( option => option.value===value) : ''
	}

	return (
		<Container>
			<StyledImageInput>
				{image && <Image src={image} alt="photo" />}
				<input
					{...register("drinkThumb", {
						required: { value: true, message: "Please add a photo" },
					})}
					// name="drinkThumb"
					id="drinkThumb"
					type="file"
					placeholder="Add image"
					onChange={handleUploadClick}
					hidden
				/>
				<AddImageButtonContainer>
					<AddImageButton htmlFor="drinkThumb">
						<Plus style={{ width: 28, height: 28 }} />
					</AddImageButton>
					<AddImageTitle>Add image</AddImageTitle>
				</AddImageButtonContainer>
			</StyledImageInput>
			<InputContainer>
				<StyledInput
					{...register("drink", {
						required: { value: true, message: "Please fill the title field" },
					})}
					type="text"
					placeholder="Enter item title"
				/>
				<StyledInput
					{...register("description", {
						required: {
							value: true,
							message: "Please fill the description field",
						},
					})}
					type="text"
					placeholder="Enter about recipe"
				/>
				<SelectContainer>
					<StyledInput disabled={true} type="text" placeholder="Category" />
					<Controller
						control={control}
						name="category"
						rules={{ required: "Please choose a category" }}
						render={({ field: { onChange, value } }) => (
							<StyledSelect
								// {...field}
								// defaultValue={optionCategories[1]}
								options={optionCategories}
								value={getValue(value, optionCategories)}
								onChange={(newValue) => onChange(newValue.label)}
								placeholder="Cocktail"
								classNamePrefix={"select"}
							/>
						)}
					/>
				</SelectContainer>
				<SelectContainer>
					<StyledInput disabled={true} type="text" placeholder="Glass" />
					<Controller
						control={control}
						name="glass"
						rules={{ required: "Please choose a glass" }}
						render={({ field: { onChange, value } }) => (
							<StyledSelect
								// {...field}
								// defaultValue={glasses[1]}
								options={optionGlasses}
								value={getValue(value, optionGlasses)}
								onChange={(newValue) => onChange(newValue.label)}
								placeholder="Highball glass"
								classNamePrefix={"select"}
							/>
						)}
					/>
				</SelectContainer>
			</InputContainer>
		</Container>
	);
};

RecipeDescriptionFields.propTypes = {
	register: PropTypes.func.isRequired,
	getFile: PropTypes.func.isRequired,
	control: PropTypes.shape({}).isRequired,
};

export default RecipeDescriptionFields;
