import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import SubTitle from "../SubTitle/SubTitle";
import {
	SubTitleContainer,
	Counter,
	CounterButton,
	CountValue,
	IngredientsList,
	StyledInput,
	SelectContainer,
	StyledSelect,
} from "./RecipeIngredientsFields.styled";
import { ReactComponent as Minus } from "../../../images/svg/add-recipe-page/minus.svg";
import { ReactComponent as Plus } from "../../../images/svg/add-recipe-page/plus.svg";
import { selectIngredients } from "../../../redux/drinks/drinksSelectors";


const RecipeIngredientsFields = ({ register, control }) => {
	const UNITS = ["ml", "l", "oz", "cup", "qt", "tsp", "tbsp"];
	const optionUnits = UNITS.map((unit) => ({
		value: unit,
		label: unit,
  }));
  
  const [ingredientsList, setIngredientsList] = useState([]);

	const [count, setCount] = useState(0);
	const ingredients = useSelector(selectIngredients);

	const optionIngredients = ingredients.map((ingredient) => ({
		value: ingredient,
		label: ingredient.title,
	}));

	const handleIngredientDelete = () => {
		setCount(count - 1);
	};

	const handleIngredientAdd = () => {
		setCount(count + 1);
	};

	// const getValue = (value, options) => {
	// 	value ? options.find((option) => option.value === value) : "";
  // };
  
	const {
	watch
  } = useForm();

  console.log(watch("ingredient"));
  
  const handleIngredientChange = (e, index) => {
    console.log(e.currentTarget.value);
    console.log(index);
    setIngredientsList([...ingredientsList, { amount: e.currentTarget.value }]);
    console.log(ingredientsList);

  }

  const hadleSelectChangeIng = selectedOption => {
    console.log(selectedOption.value);
      setIngredientsList([
				...ingredientsList,
				{ ingredient: selectedOption.value },
			]);
			console.log(ingredientsList);
  }

  const hadleSelectChangeMes = selectedOption => {
    console.log(selectedOption.value);
      setIngredientsList([
				...ingredientsList,
				{ measure: selectedOption.value },
			]);
			console.log(ingredientsList);
  }

  // const hadleChange = param => {
  //   if (param === selectedOption) {
  //     console.log(selectedOption.value);
  //   }
  // }

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
				<SelectContainer>
					<Controller
						control={control}
						name="ingredient"
						rules={{ required: "Please choose an ingredient" }}
						render={({ field: { onChange, value } }) => (
							<StyledSelect
								name="ingredient"
								// {...field}
								// defaultValue={optionCategories[1]}
								options={optionIngredients}
								// value={}
								// value={getValue(value, optionIngredients)}
								// onChange={(newValue) => onChange(newValue.value)}
								onChange={hadleSelectChangeIng}
								// placeholder="Cocktail"
								classNamePrefix={"select"}
								isSearchable
							/>
						)}
					/>
				</SelectContainer>
				<SelectContainer>
					<StyledInput
						type="number"
						name="amount"
						onChange={handleIngredientChange}
						// placeholder="Unit"
						// {...register("amount", {
						// 	required: {
						// 		value: true,
						// 		message: "Please fill the amount field",
						// 	},
						// })}
					/>
					{/* <Controller
						control={control}
						name="measure"
						rules={{ required: "Please choose unit" }}
						render={({ field: { onChange, value } }) => ( */}
					<StyledSelect
						name="measure"
						// {...field}
						// defaultValue={optionCategories[1]}
						options={optionUnits}
						// value={getValue(value, optionUnits)}
						// onChange={(newValue) => onChange(newValue.value)}
						// onChange={handleIngredientChange}
						onChange={hadleSelectChangeMes}
						// placeholder="Cocktail"
						classNamePrefix={"select"}
						isSearchable
					/>
					{/* // )} // /> */}
				</SelectContainer>
			</IngredientsList>
		</div>
	);
};

RecipeIngredientsFields.propTypes = {
	register: PropTypes.func.isRequired,
	control: PropTypes.shape({}).isRequired,
};

export default RecipeIngredientsFields;
