import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { SeeButtonStyled } from "./SeeButton.styled";

export const SeeButton = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/main/recipe/${id}`);
  };

  return <SeeButtonStyled onClick={handleClick}>See recipe</SeeButtonStyled>;
};

SeeButton.propTypes = {
  id: PropTypes.string.isRequired,
};
