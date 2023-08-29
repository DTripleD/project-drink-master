import { useEffect, useState } from "react";
import { selectUser } from "../../redux/auth/selectors";
import { Controller } from "react-hook-form";
import { ReactComponent as Plus } from "../../../images/svg/add-photo.svg";
import { ReactComponent as Cross } from "../../../images/svg/close.svg";
import { ReactComponent as editSVG } from "../../images/svg/edit.svg";

import * as yup from "yup";
import { BackDrop, Modal } from "./UserInfoModal.styled";

const modalRoot = document.querySelector("#modal-root");

const schema = yup
	.object({
		userName: yup.string().required(),
		file: yup.mixed().required("File is required"),
	})
	.required();

export const UserInfoModal = ({ control, handleModalClose }) => {
	const dispatch = useDispatch();
	const { name, avatarURL } = useSelector(selectUser);
	const [image, setImage] = useState({ preview: avatarURL, data: null });
	const [userName, setUserName] = useState(name);
	const [isButtonEnabled, setIsButtonEnabled] = useState(false);

	const userInfoFormSubmit = (e) => {
		e.preventDefault();

		if (userName === name && !image.data) {
			setIsButtonEnabled(false);

			return;
		}
		const updatedUserName = e.target.elements.user_name.value;
		setUserName(updatedUserName);

		const formData = new FormData();
		formData.append("file", image.data);
		formData.append("userName", userName);

		dispatch(update(formData));

		handlerEditProfileClick();
	};

	const onImageChange = (e) => {
		const img = {
			preview: URL.createObjectURL(e.target.files[0]),
			data: e.target.files[0],
		};
		setImage(img);
		setIsButtonEnabled(true);
	};

	const onNameChange = (e) => {
		if (userName !== e.target.value) {
			setIsButtonEnabled(true);
		}
	};

	useEffect(() => {
		if (userName !== name) {
			setIsButtonEnabled(true);
		}
	}, [userName, name]);

	useEffect(() => {
		const userImage = document.getElementById("user_image");
		if (image.preview) {
			userImage.src = image.preview;
		}
		return () => {
			if (image.preview) {
				URL.revokeObjectURL(image.preview);
			}
		};
	}, [image.preview]);

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

	const handleUploadClick = (event) => {
		const file = event.target.files[0];

		const reader = new FileReader();
		if (file) {
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				setImage(reader.result);
				getFile(file);
			};
		}
	};

	return (
		<BackDrop onClick={handleBackdropClick}>
			<Modal>
				<button type="button">{Cross}</button>
				<form action=""></form>
			</Modal>
		</BackDrop>
	);
};
