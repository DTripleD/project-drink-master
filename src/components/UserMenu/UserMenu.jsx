import { useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";
import {
	MenuWrapper,
	UserName,
	UserPhoto,
	UserPhotoWrapper,
	DropWrapper,
} from "./UserMenu.styled";
import { UserLogoModal } from "../UserLogoModal/UserLogoModal";
import userDefaultPhoto from "../../images/user.png";
import { useRef, useState } from "react";

const UserMenu = () => {
	const user = useSelector(selectUser);
	const [openDrop, setOpenDrop] = useState(false);

	return (
		<>
			<MenuWrapper open={openDrop} onClick={() => setOpenDrop(!openDrop)}>
				<UserPhotoWrapper>
					<UserPhoto src={userDefaultPhoto} alt="" />
				</UserPhotoWrapper>
				<UserName>{user.name}</UserName>
			</MenuWrapper>
			<DropWrapper>{openDrop && <UserLogoModal />}</DropWrapper>
		</>
	);
};

export default UserMenu;
