// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { HeaderStyled } from "./Header.styled";
// import WelcomePage from "../../pages/WellcomPage/WellcomPage";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const Header = () => {
	//   const isLoggedIn = useSelector(selectIsLoggedIn);
	return (
		<HeaderStyled>
			<Logo />
			<Navigation />
			{/* {isLoggedIn && <Navigation />} */}
			{/* {isLoggedIn ? <UserMenu /> : <WelcomePage />} */}

			<UserMenu />
		</HeaderStyled>
	);
};

export default Header;
