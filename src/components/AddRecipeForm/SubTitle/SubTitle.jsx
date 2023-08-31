import PropTypes from "prop-types";
import { SubTitleStyled } from "./SubTitle.styled";

const SubTitle = ({title}) => {
  return <SubTitleStyled>{title}</SubTitleStyled>
};

SubTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

export default SubTitle;
