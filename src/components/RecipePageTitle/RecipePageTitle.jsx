import PropTypes from "prop-types";
import RecipeTitle from "./RecipePageTitle.styled";


const RecipePageTitle = ({ title }) => {
  return (
    <div>
      <RecipeTitle>{title}</RecipeTitle>
    </div>
  );
};
RecipePageTitle.propTypes = {
    title: PropTypes.string,
  };
  

export default RecipePageTitle;