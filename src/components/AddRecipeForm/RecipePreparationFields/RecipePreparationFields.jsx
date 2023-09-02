import PropTypes from "prop-types";
import SubTitle from "../SubTitle/SubTitle";
import { SubContainer, Textarea } from "./RecipePreparationFields.styled";

const RecipePreparationFields = ({ register }) => {
	return (
		<SubContainer>
			<SubTitle title="Recipe Preparation"></SubTitle>
			<Textarea
				{...register("instructions", {
					required: { value: true, message: "Please add instructions" },
				})}
				// name="instructions"
				placeholder="Enter the recipe"
			/>
		</SubContainer>
	);
};

RecipePreparationFields.propTypes = {
	register: PropTypes.func.isRequired
};

export default RecipePreparationFields;
