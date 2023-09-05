import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { selectUser } from "../../redux/auth/selectors";
import { updateAvatar, updateUserName } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Cross } from "../../images/svg/close.svg";
import { ReactComponent as Plus } from "../../images/svg/plus.svg";
import { ReactComponent as editSVG } from "../../images/svg/edit.svg";
import User from "../../images/user.png";
import { toast } from "react-hot-toast";

import {
	BackDrop,
	Modal,
	CloseBtn,
	getStyledCloseIcon,
	AvatarWrapper,
	Avatar,
	AvatarInput,
	AvatarIcon,
	getStyledPlus,
	InputWrapper,
	Input,
	InputIcon,
	getStyledEdit,
	SaveButton,
} from "./UserInfoModal.styled";

const logoutRoot = document.querySelector("#logout-root");
const StyledCloseIcon = getStyledCloseIcon(Cross);
const StyledPlusIcon = getStyledPlus(Plus);
const StyledEditIcon = getStyledEdit(editSVG);

export const UserInfoModal = ({
	handleModalClose,
	handleBackdropClick,
	handleLogoutModalOpen,
}) => {
	const dispatch = useDispatch();
	const { name, avatarURL } = useSelector(selectUser);
	const [userName, setUserName] = useState(name);
	const [image, setImage] = useState(null);
	const [imgURL, setImgURL] = useState(null);
	const [isButtonEnabled, setIsButtonEnabled] = useState(false);

	const userInfoFormSubmit = (e) => {
		if (!isButtonEnabled) {
			setIsButtonEnabled(false);
			toast.error("No change!");
			return;
		}
		e.preventDefault();

		if (image) {
			dispatch(updateAvatar(image));
		}

		if (name !== userName) {
			dispatch(updateUserName(userName));
		}

		handleModalClose();
	};

	const onImageChange = (event) => {
		const file = event.target.files[0];
		setImgURL(URL.createObjectURL(file));
		setImage(file);
		setIsButtonEnabled(true);
	};

	const onNameChange = (e) => {
		setUserName(e.target.value);
		if (name !== e.target.value) {
			setIsButtonEnabled(true);
		}
		if (name === e.target.value && imgURL === null) {
			setIsButtonEnabled(false);
		}
	};

	useEffect(() => {
		const userImage = document.getElementById("user_image");
		if (imgURL) {
			userImage.src = imgURL;
		}
		return () => {
			if (imgURL) {
				URL.revokeObjectURL(imgURL);
			}
		};
	}, [imgURL]);

	return createPortal(
		<BackDrop onClick={handleBackdropClick}>
			<Modal>
				<CloseBtn onClick={handleModalClose} type="button">
					{<StyledCloseIcon />}
				</CloseBtn>
				<form onSubmit={userInfoFormSubmit}>
					<AvatarWrapper>
						<Avatar src={avatarURL || User} alt="" id="user_image" />
						<AvatarInput
							type="file"
							id="file_upload"
							name="avatarURL"
							onChange={onImageChange}
						/>
						<AvatarIcon htmlFor="file_upload">
							<StyledPlusIcon />
						</AvatarIcon>
					</AvatarWrapper>
					<InputWrapper>
						<Input
							type="text"
							id="name"
							name="name"
							onChange={onNameChange}
							value={userName}
						/>
						<InputIcon>
							<StyledEditIcon />
						</InputIcon>
					</InputWrapper>
					<SaveButton type="submit" disabled={!isButtonEnabled}>
						Save changes
					</SaveButton>
				</form>
			</Modal>
		</BackDrop>,
		logoutRoot
	);
};

UserInfoModal.propTypes = {
	handleModalClose: PropTypes.func,
	handleBackdropClick: PropTypes.func,
	handleLogoutModalOpen: PropTypes.func,
};
