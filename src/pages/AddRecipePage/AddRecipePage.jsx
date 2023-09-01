import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";
import FollowUs from "../../components/FollowUs/FollowUs";
import {MainContainer} from '../../components/MainContainer/MainContainer'
import { FollowUsConatiner, FollowUsTitle } from "./AddRecipePage.styled";

const AddRecipePage = () => {
  return (
		<MainContainer>
			<MainPageTitle title="Add recipe"></MainPageTitle>
			<AddRecipeForm />
			<FollowUsConatiner>
				<FollowUsTitle>Follow Us</FollowUsTitle>
				<FollowUs />
			</FollowUsConatiner>
		</MainContainer>
	);
};

export default AddRecipePage;
