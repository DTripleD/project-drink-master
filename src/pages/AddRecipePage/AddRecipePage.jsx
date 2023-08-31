import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";
import {MainContainer} from '../../components/MainContainer/MainContainer'

const AddRecipePage = () => {
  return (
		<MainContainer>
			<MainPageTitle title="Add recipe"></MainPageTitle>
			<AddRecipeForm />
		</MainContainer>
	);
};

export default AddRecipePage;
