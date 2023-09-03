import { useState } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

import {
	Container,
	AddImageButtonContainer,
	Image,
	StyledImageInput,
	ErrorContainer,
	Error,
	ErrorImg,
	AddImageButton,
	AddImageTitle,
	InputContainer,
	StyledInput,
	SelectContainer,
	StyledSelect,
} from "./RecipeDescriptionFields.styled";
import { ReactComponent as Plus } from "../../../images/svg/add-photo.svg";
import { useSelector } from "react-redux";
import {
	selectCategories,
	selectGlasses,
} from "../../../redux/drinks/drinksSelectors";

const RecipeDescriptionFields = ({ getFile, register, control, errors }) => {
	const [image, setImage] = useState(null);

	const categories = useSelector(selectCategories);
	const glasses = useSelector(selectGlasses);

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
		value ? options.find((option) => option.value === value) : "";
	};

	return (
		<Container>
			<StyledImageInput>
				{image && <Image src={image} alt="photo" />}
				<input
					// {...register("drinkThumb", {
					// 	required: { value: true, message: "Please add a photo" },
					// })}
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
				{/* {errors.drinkThumb && <ErrorImg>{errors.drinkThumb.message}</ErrorImg>} */}
			</StyledImageInput>
			<InputContainer>
				<ErrorContainer>
					<StyledInput
						{...register("drink", {
							required: { value: true, message: "Please fill the title field" },
						})}
						type="text"
						placeholder="Enter item title"
						autoComplete="off"
					/>
					{errors.drink && <Error>{errors.drink.message}</Error>}
				</ErrorContainer>
				<ErrorContainer>
					<StyledInput
						{...register("description", {
							required: {
								value: true,
								message: "Please fill the description field",
							},
						})}
						type="text"
						placeholder="Enter about recipe"
						autoComplete="off"
					/>
					{errors.description && <Error>{errors.description.message}</Error>}
				</ErrorContainer>
				<SelectContainer>
					<StyledInput disabled={true} type="text" placeholder="Category" />
					<Controller
						control={control}
						name="category"
						rules={{ required: "Please choose a category" }}
						render={({ field: { onChange, value } }) => (
							<StyledSelect
								defaultValue={optionCategories[1]}
								options={optionCategories}
								value={getValue(value, optionCategories)}
								onChange={(newValue) => onChange(newValue.label)}
								classNamePrefix={"select"}
							/>
						)}
					/>
					{errors.category && <Error>{errors.category.message}</Error>}
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
								defaultValue={optionGlasses[0]}
								options={optionGlasses}
								value={getValue(value, optionGlasses)}
								onChange={(newValue) => onChange(newValue.label)}
								classNamePrefix={"select"}
							/>
						)}
					/>
					{errors.glass && <Error>{errors.glass.message}</Error>}
				</SelectContainer>
			</InputContainer>
		</Container>
	);
};

RecipeDescriptionFields.propTypes = {
	register: PropTypes.func.isRequired,
	getFile: PropTypes.func.isRequired,
	control: PropTypes.shape({}).isRequired,
	errors: PropTypes.shape({}).isRequired,
};

export default RecipeDescriptionFields;
