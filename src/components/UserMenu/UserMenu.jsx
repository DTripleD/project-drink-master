import { useDispatch, useSelector } from "react-redux";
// import { logOut } from "redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import {
	MenuWrapper,
	UserName,
	UserPhoto,
	UserPhotoWrapper,
} from "./UserMenu.styled";
import { useState } from "react";
import { UserLogoModal } from "../UserLogoModal/UserLogoModal";
import userDefaultPhoto from "../../images/user.png";
const UserMenu = () => {
	const user = useSelector(selectUser);
	const [showModal, setShowModal] = useState(false);

	const handleModalOpen = () => {
		setShowModal(true);
	};

	const handleModalClose = () => {
		setShowModal(false);
	};

	//   const dispatch = useDispatch();

	//   const handleLogout = (event) => {
	//     event.preventDefault();
	//     dispatch(logOut());
	//   };

	return (
		<MenuWrapper onClick={handleModalOpen}>
			<UserPhotoWrapper>
				<UserPhoto src={userDefaultPhoto} alt="" />
			</UserPhotoWrapper>
			<UserName>{UserMenu.name}</UserName>
			{showModal && <UserLogoModal handleModalClose={handleModalClose} />}
		</MenuWrapper>
	);
};

export default UserMenu;
