import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
// import { logOut } from "redux/auth/operations";
// import { logOut } from "../../redux/auth/operations";

import { ReactComponent as editSVG } from "../../images/svg/edit.svg";
import {
	getStyledEdit,
	Drop,
	EditButton,
	SvgButton,
	LogOutButton,
} from "./UserLogoModal.styled";
import { logout } from "../../redux/auth/operations";

const StyledEditSvg = getStyledEdit(editSVG);

export const UserLogoModal = ({ setOpenDrop }) => {
	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(false);

	const handleModalOpen = () => {
		setShowModal(true);
	};

	const handleModalClose = () => {
		setShowModal(false);
	};

	const handleLogout = (event) => {
		event.preventDefault();
		dispatch(logout());
	};

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.code === "Escape") {
				handleModalClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleModalClose]);

	return (
		<Drop open={setOpenDrop}>
			<div>
				<EditButton onClick={handleModalOpen} type="button">
					Edit profile
				</EditButton>
				<SvgButton>{<StyledEditSvg />}</SvgButton>
			</div>
			<LogOutButton onClick={handleLogout} type="button">
				Log out
			</LogOutButton>
		</Drop>
	);
};
