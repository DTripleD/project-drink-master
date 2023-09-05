import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import SubTitle from "../SubTitle/SubTitle";
import { Controller } from "react-hook-form";
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
	Error,
	ErrorContainer,
	StyledSelect,
	StyledUnitSelect,
	DeleteButton,
} from "./RecipeIngredientsFields.styled";
import { ReactComponent as Minus } from "../../../images/svg/add-recipe-page/minus.svg";
import { ReactComponent as Plus } from "../../../images/svg/add-recipe-page/plus.svg";
import { ReactComponent as X } from "../../../images/svg/add-recipe-page/x.svg";
import { selectIngredients } from "../../../redux/drinks/drinksSelectors";

const RecipeIngredientsFields = ({
	errors,
	control,
	register,
	fields,
	append,
	remove,
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

	const handleIngredientDelete = (index) => {
		remove(index);
		setCount(count - 1);
	};

	const handleIngredientAdd = () => {
		append({
			ingredient: "",
			amount: "",
			unit: "ml",
		});
		setCount(count + 1);
	};

	const getValue = (value, options) => {
		value ? options.find((option) => option.value === value) : "";
	};

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
						<Plus style={{ width: 16, height: 16 }} />
					</CounterButton>
				</Counter>
			</SubTitleContainer>
			<IngredientsList>
				{fields.map((field, index) => (
					<IngredientsListItem key={field.id}>
						<SelectsContainer>
							<ErrorContainer>
								<Controller
									control={control}
									name={`ingredients.${index}.ingredient`}
									rules={{ required: "Please choose an ingredient" }}
									render={({ field: { onChange, value } }) => (
										<StyledSelect
											options={optionIngredients}
											onChange={(newValue) => onChange(newValue.value)}
											classNamePrefix={"select"}
											isSearchable
											value={getValue(value, optionIngredients)}
											placeholder="Choose an ingredient"
										/>
									)}
								/>
								<Error>{errors?.["ingredients"]?.[index]?.["ingredient"]?.["message"]}</Error>
							</ErrorContainer>
							<SelectContainer>
								<StyledInput
									type="text"
									{...register(`ingredients.${index}.amount`, {
										required: {
											value: true,
											message: "Please add amount",
										},
									})}
									autoComplete="off"
								/>
								<Error>
									{errors?.["ingredients"]?.[index]?.["amount"]?.["message"]}
								</Error>
								<Controller
									control={control}
									name={`ingredients.${index}.unit`}
									rules={{ required: "Please choose a unit" }}
									render={({ field: { onChange, value } }) => (
										<StyledUnitSelect
											options={optionUnits}
											onChange={(newValue) => onChange(newValue.label)}
											classNamePrefix={"select"}
											isSearchable
											defaultValue={optionUnits[0]}
											value={getValue(value, optionUnits)}
										/>
									)}
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
	errors: PropTypes.shape({}).isRequired,
	fields: PropTypes.array.isRequired,
	append: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
};

export default RecipeIngredientsFields;
