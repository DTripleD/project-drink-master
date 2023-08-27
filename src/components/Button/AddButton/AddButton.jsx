import PropTypes from "prop-types";
import { StyledButton } from "./AddButton.styled";

export const AddButton = ({
  text = "I am a button",
  ariaLabel = "button for click",
  marginbottom = "0px",
  margintop = "0px",
  onClick,
  type = "button",
}) => {
  return (
    <StyledButton
      type={type}
      aria-label={ariaLabel}
      marginbottom={marginbottom}
      margintop={margintop}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

AddButton.propTypes = {
  text: PropTypes.string.isRequired,

  ariaLabel: PropTypes.string.isRequired,
  marginbottom: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.func,
  margintop: PropTypes.number,
};
