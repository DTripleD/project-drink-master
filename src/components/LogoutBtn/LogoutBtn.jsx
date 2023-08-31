import { dividerClasses } from "@mui/material";
import { createPortal } from "react-dom";
import { ReactComponent as Cross } from "../../images/svg/close.svg";
import {
	BackDrop,
	Modal,
	CloseBtn,
	ButtonWrapper,
	ModalText,
	LogoutButton,
	CanceltBtn,
	StyledCloseIcon,
} from "./LogoutBtn.styled";
import { useEffect } from "react";

const modalRoot = document.querySelector("#logout-root");
const StyledCloseIcon = getStyledCloseIcon(CloseMenuIcon);

export const LogoutBtn = ({ handleModalClose, handleLogout }) => {
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

	const handleBackdropClick = (event) => {
		if (event.currentTarget === event.target) {
			handleModalClose();
		}
	};

	return createPortal(
		<BackDrop onClick={handleBackdropClick}>
			<Modal>
				<CloseBtn onClic={handleModalClose} type="button">
					{<StyledCloseIcon />}
				</CloseBtn>
				<ModalText>Are you sure you want to log out?</ModalText>
				<ButtonWrapper>
					<LogoutButton onClick={handleLogout} type="button">
						Log out
					</LogoutButton>
					<CanceltBtn onClick={handleModalClose} type="button">
						Cancel
					</CanceltBtn>
				</ButtonWrapper>
			</Modal>
		</BackDrop>,
		modalRoot
	);
};
