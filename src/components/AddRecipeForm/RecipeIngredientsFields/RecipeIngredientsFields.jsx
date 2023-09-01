import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
// import { Controller, useForm } from "react-hook-form";
import SubTitle from "../SubTitle/SubTitle";
import {
	SubTitleContainer,
	Counter,
	CounterButton,
	CountValue,
	IngredientsList,
	IngredientsListItem,
	StyledInput,
	SelectsContainer,
	SelectContainer,
	StyledSelect,
	StyledUnitSelect,
	DeleteButton,
} from "./RecipeIngredientsFields.styled";
import { ReactComponent as Minus } from "../../../images/svg/add-recipe-page/minus.svg";
import { ReactComponent as Plus } from "../../../images/svg/add-recipe-page/plus.svg";
import { ReactComponent as X } from "../../../images/svg/add-recipe-page/x.svg";
import { selectIngredients } from "../../../redux/drinks/drinksSelectors";

const RecipeIngredientsFields = ({
	register,
	control,
	ingredientsList,
	setIngredientsList,
}) => {
	const UNITS = ["ml", "l", "oz", "cup", "qt", "tsp", "tbsp"];
	const optionUnits = UNITS.map((unit) => ({
		value: unit,
		label: unit,
	}));

	const [count, setCount] = useState(0);
	const ingredients = useSelector(selectIngredients);

	const optionIngredients = ingredients.map((ingredient) => ({
		value: ingredient,
		label: ingredient.title,
	}));

	const handleIngredientDelete = () => {
		if (ingredientsList.length > 0) {
			const newIngredientsList = [...ingredientsList];
			newIngredientsList.pop();
			setIngredientsList(newIngredientsList);
			setCount(count - 1);
		}
	};

	const handleIngredientAdd = () => {
		console.log(ingredientsList);
		setIngredientsList((prevState) => {
			return [...prevState, { title: "", amount: "", unit: "" }];
		});
		setCount(count + 1);
	};

	// const getValue = (value, options) => {
	// 	value ? options.find((option) => option.value === value) : "";
	// };

	// const { watch } = useForm();

	// console.log(watch("ingredient"));

	return (
		<div>
			<SubTitleContainer>
				<SubTitle title="Ingredients"></SubTitle>
				<Counter>
					<CounterButton type="button" onClick={handleIngredientDelete}>
						<Minus style={{ width: 16, height: 16 }} />
					</CounterButton>
					<CountValue>{count}</CountValue>
					<CounterButton type="button" onClick={handleIngredientAdd}>
						<Plus style={{ width: 16, height: 16, stroke: "white" }} />
					</CounterButton>
				</Counter>
			</SubTitleContainer>
			<IngredientsList>
				{ingredientsList.map((el, index) => (
					<IngredientsListItem key={index}>
						<SelectsContainer>
							<StyledSelect
								name="ingredient"
								options={optionIngredients}
								classNamePrefix={"select"}
								isSearchable
								defaultValue={optionIngredients[0]}
							/>
							<SelectContainer>
								<StyledInput type="text" name="amount" />
								<StyledUnitSelect
									name="unit"
									options={optionUnits}
									classNamePrefix={"select"}
									isSearchable
									defaultValue={optionUnits[0]}
								/>
							</SelectContainer>
						</SelectsContainer>
						<DeleteButton type="button" onClick={handleIngredientDelete}>
							<X style={{ width: 18, height: 18 }} />
						</DeleteButton>
					</IngredientsListItem>
				))}
			</IngredientsList>
		</div>
	);
};

RecipeIngredientsFields.propTypes = {
	register: PropTypes.func.isRequired,
	control: PropTypes.shape({}).isRequired,
};

export default RecipeIngredientsFields;

// <SelectContainer>
// 	<StyledInput
// 		type="number"
// 		name="amount"
// 		onChange={handleIngredientChange}
// 		// placeholder="Unit"
// 		// {...register("amount", {
// 		// 	required: {
// 		// 		value: true,
// 		// 		message: "Please fill the amount field",
// 		// 	},
// 		// })}
// 	/>
// 	{/* <Controller
// 		control={control}
// 		name="measure"
// 		rules={{ required: "Please choose unit" }}
// 		render={({ field: { onChange, value } }) => ( */}
// 	<StyledSelect
// 		name="measure"
// 		// {...field}
// 		// defaultValue={optionCategories[1]}
// 		options={optionUnits}
// 		// value={getValue(value, optionUnits)}
// 		// onChange={(newValue) => onChange(newValue.value)}
// 		// onChange={handleIngredientChange}
// 		onChange={hadleSelectChangeMes}
// 		// placeholder="Cocktail"
// 		classNamePrefix={"select"}
// 		isSearchable
// 	/>
// 	{/* // )} // /> */}
// </SelectContainer>;
