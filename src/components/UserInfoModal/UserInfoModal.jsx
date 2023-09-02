import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { selectUser } from "../../redux/auth/selectors";
import { updateAvatar, updateUserName } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";

import plus from "../../images/svg/add-photo.svg";
import cross from "../../images/svg/close.svg";
import editSVG from "../../images/svg/edit.svg";
import defaultPhoto from "../../images/user@2x.png";
import User from "../../images/user.png";

import {
	BackDrop,
	Modal,
	CloseBtn,
	AvatarWrapper,
	Avatar,
	AvatarInput,
	AvatarIcon,
	InputWrapper,
	Input,
	InputIcon,
	SaveButton,
} from "./UserInfoModal.styled";

const logoutRoot = document.querySelector("#logout-root");

export const UserInfoModal = ({
	handleModalClose,
	handleBackdropClick,
	handleLogoutModalOpen,
}) => {
	const dispatch = useDispatch();
	const { name, avatarURL = defaultPhoto } = useSelector(selectUser);
	const [userName, setUserName] = useState(name);
	const [image, setImage] = useState(null);
	const [imgURL, setImgURL] = useState(null);
	const [isButtonEnabled, setIsButtonEnabled] = useState(false);

	const userInfoFormSubmit = (e) => {
		if (!isButtonEnabled) {
			setIsButtonEnabled(false);
			return;
		}
		e.preventDefault();
		// const formData = new FormData();
		if (image) {
			// console.log(image);
			// formData.append("avatarURL", image);
			dispatch(updateAvatar(image));
		}

		if (name !== userName) {
			dispatch(updateUserName(userName));
		}

		// const formData = new FormData();

		// if (values?.name) {
		// 	formData.append("name", values.name);
		// 	dispatch(updateUserName(formData));
		// }

		// if (image) {
		// 	console.log(image);
		// 	formData.append("avatarURL", image);
		// 	dispatch(updateAvatar(formData));
		// }

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

	// const saveChanges = (e) => {
	// 	e.preventDefault();
	// 	// const formData = new FormData();
	// 	if (image) {
	// 		// console.log(image);
	// 		// formData.append("avatarURL", image);
	// 		dispatch(updateAvatar(image));
	// 	}
	// };

	return createPortal(
		<BackDrop onClick={handleBackdropClick}>
			<Modal>
				<CloseBtn onClick={handleModalClose} type="button">
					{cross}
				</CloseBtn>
				<form onSubmit={userInfoFormSubmit}>
					<AvatarWrapper>
						<Avatar src={avatarURL ? avatarURL : User} alt="" id="user_image" />
						<AvatarInput
							type="file"
							id="file_upload"
							name="avatarURL"
							onChange={onImageChange}
						/>
						<label htmlFor="file_upload">
							<AvatarIcon>
								<use href={plus}></use>
							</AvatarIcon>
						</label>
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
							<use href={editSVG}></use>
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
