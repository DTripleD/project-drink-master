import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { logout } from "../../redux/auth/operations";
import { useNavigate } from "react-router";
import { LogoutBtn } from "../LogoutBtn/LogoutBtn";
import { UserInfoModal } from "../UserInfoModal/UserInfoModal";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import User from "../../images/user.png";

import { selectUser } from "../../redux/auth/selectors";
import {
	MenuWrapper,
	UserName,
	UserPhoto,
	UserPhotoWrapper,
} from "./UserMenu.styled";
import { UserLogoModal } from "../UserLogoModal/UserLogoModal";

const UserMenu = () => {
	const { name, avatarURL } = useSelector(selectUser);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [openDrop, setOpenDrop] = useState(false);
	const [showInfoModal, setShowInfoModal] = useState(false);
	const [showLogoutModal, setShowLogoutModal] = useState(false);

	const node = useRef();
	useOnClickOutside(node, () => setOpenDrop(false));

	const handleLogoutModalOpen = () => {
		setShowLogoutModal(true);
		setOpenDrop(false);
		document.body.style.overflow = "hidden";
	};

	const handleInfoModalOpen = () => {
		setShowInfoModal(true);
		setOpenDrop(false);
		document.body.style.overflow = "hidden";
	};

	const handleModalClose = () => {
		setShowInfoModal(false);
		setShowLogoutModal(false);
		setOpenDrop(false);
		document.body.style.overflow = "";
	};

	const handleLogout = (event) => {
		// event.preventDefault();
		dispatch(logout());
		navigate("/");
	};

	const handleBackdropClick = (event) => {
		if (event.currentTarget === event.target) {
			handleModalClose();
			document.body.style.overflow = "";
		}
	};

	const handleKeyDown = (event) => {
		if (event.code === "Escape") {
			handleModalClose();
			document.body.style.overflow = "";
		}
	};

	useEffect(() => {
		if (openDrop) {
			window.addEventListener("keydown", handleKeyDown);
			window.addEventListener("click", handleBackdropClick);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("click", handleBackdropClick);
		};
	}, [handleModalClose]);

	useEffect(() => {
		if (showInfoModal) {
			window.addEventListener("keydown", handleKeyDown);
			window.addEventListener("click", handleBackdropClick);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("click", handleBackdropClick);
		};
	}, [handleModalClose]);

	useEffect(() => {
		if (showLogoutModal) {
			window.addEventListener("keydown", handleKeyDown);
			window.addEventListener("click", handleBackdropClick);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("click", handleBackdropClick);
		};
	}, [handleModalClose]);

	return (
		<>
			<MenuWrapper open={openDrop} onClick={() => setOpenDrop(!openDrop)}>
				<UserPhotoWrapper>
					<UserPhoto src={avatarURL || User} alt="" />
				</UserPhotoWrapper>
				<UserName>{name}</UserName>
				{openDrop && (
					<div ref={node}>
						<UserLogoModal
							handleInfoModalOpen={handleInfoModalOpen}
							handleLogoutModalOpen={handleLogoutModalOpen}
						/>
					</div>
				)}
			</MenuWrapper>

			{showInfoModal && (
				<UserInfoModal
					handleInfoModalOpen={handleInfoModalOpen}
					handleBackdropClick={handleBackdropClick}
					handleLogoutModalOpen={handleLogoutModalOpen}
					handleModalClose={handleModalClose}
				/>
			)}

			{showLogoutModal && (
				<LogoutBtn
					handleInfoModalOpen={handleInfoModalOpen}
					handleModalClose={handleModalClose}
					handleLogout={handleLogout}
					handleBackdropClick={handleBackdropClick}
				/>
			)}
		</>
	);
};

export default UserMenu;
