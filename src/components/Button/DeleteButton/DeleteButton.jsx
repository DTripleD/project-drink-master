import PropTypes from "prop-types";
import { StyledButton, getStyledIcon } from "./DeleteButton.styled";
import { ReactComponent as TrashIcon } from "../../../assets/trash.svg";

const StyledTrashIcon = getStyledIcon(TrashIcon);
export const DeleteButton = ({
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
      <StyledTrashIcon />
    </StyledButton>
  );
};

DeleteButton.propTypes = {
  ariaLabel: PropTypes.string,
  marginbottom: PropTypes.number,
  onClick: PropTypes.func,
  type: PropTypes.string,
  margintop: PropTypes.number,
};
