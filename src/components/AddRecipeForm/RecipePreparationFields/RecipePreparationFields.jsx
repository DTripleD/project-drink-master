import PropTypes from "prop-types";
import SubTitle from "../SubTitle/SubTitle";
import { SubContainer, Textarea, Error } from "./RecipePreparationFields.styled";

const RecipePreparationFields = ({ register, errors }) => {
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
			{errors.instructions && <Error>{errors.instructions.message}</Error>}
		</SubContainer>
	);
};

RecipePreparationFields.propTypes = {
	register: PropTypes.func.isRequired,
	errors: PropTypes.shape({}).isRequired,
};

export default RecipePreparationFields;
