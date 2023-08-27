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

const RecipeDescriptionFields = ({ register, control }) => {
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
      console.log(event.target.files[0]);
			const file = event.target.files[0];
			const reader = new FileReader();
			if (file) {
				reader.readAsDataURL(file);
				reader.onloadend = function (e) {
					setImage(reader.result);
					// onChange({ img: event.target.files[0] });
				};
			}
    };
  
  return (
		<Container>
			<StyledImageInput>
				{image && <Image src={image} alt="photo" />}
				<input
					name="drinkThumb"
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
					{...register("drink")}
					type="text"
					placeholder="Enter item title"
				/>
				<StyledInput
					{...register("description")}
					type="text"
					placeholder="Enter about recipe"
				/>
				<SelectContainer>
					<StyledInput disabled={true} type="text" placeholder="Category" />
					<Controller
						control={control}
						name="category"
						render={({ field: { onChange, value } }) => (
							<StyledSelect
								// {...field}
								defaultValue={optionCategories[1]}
								options={optionCategories}
								value={value}
								onChange={onChange}
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
						render={({ field: { onChange, value } }) => (
							<StyledSelect
								// {...field}
								defaultValue={glasses[1]}
								options={optionGlasses}
								value={value}
								onChange={onChange}
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
};

export default RecipeDescriptionFields;
