import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as editSVG } from "../../images/svg/edit.svg";
import {
	getStyledEdit,
	Drop,
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
				<div>
					<EditButton onClick={handleInfoModalOpen} type="button">
						Edit profile
					</EditButton>
					<SvgButton>{<StyledEditSvg />}</SvgButton>
				</div>
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
