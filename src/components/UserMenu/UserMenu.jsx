// import { useDispatch, useSelector } from "react-redux";
// import { logOut } from "redux/auth/operations";
// import { selectUser } from "redux/auth/selectors";
import { MenuWrapper, UserName, UserPhoto } from "./UserMenu.styled";
// import { Button } from "@mui/material";

const UserMenu = () => {
	//   const user = useSelector(selectUser);

	//   const dispatch = useDispatch();

	//   const handleLogout = (event) => {
	//     event.preventDefault();
	//     dispatch(logOut());
	//   };

	return (
		<MenuWrapper>
			<UserPhoto>
				<img src="#" alt="" />
			</UserPhoto>
			<UserName>hello</UserName>
		</MenuWrapper>
	);
};

export default UserMenu;
