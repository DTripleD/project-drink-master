import PropTypes from "prop-types";
import MainTitle from "./MainPageTitle.styled";

const MainPageTitle = ({ title }) => {
  return (
    <div>
      <MainTitle>{title}</MainTitle>
    </div>
  );
};

MainPageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainPageTitle;
