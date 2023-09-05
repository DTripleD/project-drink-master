import PropTypes from "prop-types";
import { ReactComponent as editSVG } from "../../images/svg/edit.svg";
import {
	getStyledEdit,
	Drop,
	EditWrapper,
	EditButton,
	SvgButton,
	LogOutButton,
} from "./UserLogoModal.styled";

const StyledEditSvg = getStyledEdit(editSVG);

export const UserLogoModal = ({
  setOpenDrop,
  handleInfoModalOpen,
  handleLogoutModalOpen,
}) => {
	return (
		<>
			<Drop open={setOpenDrop}>
				<EditWrapper onClick={handleInfoModalOpen}>
					<EditButton type="button">Edit profile</EditButton>
					<SvgButton>{<StyledEditSvg />}</SvgButton>
				</EditWrapper>
				<LogOutButton onClick={handleLogoutModalOpen} type="button">
					Log out
				</LogOutButton>
			</Drop>
		</>
	);

};

UserLogoModal.propTypes = {
  setOpenDrop: PropTypes.func,
  handleInfoModalOpen: PropTypes.func,
  handleLogoutModalOpen: PropTypes.func,
};
