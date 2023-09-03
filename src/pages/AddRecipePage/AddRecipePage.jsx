import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";
import FollowUs from "../../components/FollowUs/FollowUs";
import PopularRecipe from "../../components/PopularRecipe/PopularRecipe";
import {MainContainer} from '../../components/MainContainer/MainContainer'
import {
	GridContainer,
	GridSecondContainer,
	GridThirdConatiner,
	GridFourthConatiner,
	Title,
} from "./AddRecipePage.styled";

const AddRecipePage = () => {
  return (
		<MainContainer>
			<MainPageTitle title="Add recipe"></MainPageTitle>
			<GridContainer>
				<AddRecipeForm />
				<GridSecondContainer>
					<GridThirdConatiner>
						<Title>Follow Us</Title>
						<FollowUs />
					</GridThirdConatiner>
					<GridFourthConatiner>
						<Title>Popular recipe</Title>
						<PopularRecipe />
					</GridFourthConatiner>
				</GridSecondContainer>
			</GridContainer>
		</MainContainer>
	);
};

export default AddRecipePage;
