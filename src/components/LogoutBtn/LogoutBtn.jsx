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
	getStyledCloseIcon,
} from "./LogoutBtn.styled";

const modalRoot = document.querySelector("#modal-root");
const StyledCloseIcon = getStyledCloseIcon(Cross);

export const LogoutBtn = ({
	handleModalClose,
	handleLogout,
	handleBackdropClick,
}) => {
	return createPortal(
		<BackDrop onClick={handleBackdropClick}>
			<Modal>
				<CloseBtn onClick={handleModalClose} type="button">
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
