// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors/selectIsLoggedIn";
import { HeaderStyled } from "./Header.styled";
// import WelcomePage from "../../pages/WellcomPage/WellcomPage";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import MediaQuery from "react-responsive";

const Header = () => {
	// const isLoggedIn = useSelector(selectIsLoggedIn);
	return (
		<HeaderStyled>
			<Logo />
			<MediaQuery minWidth={1440}>
				<Navigation />
			</MediaQuery>

			{/* <MediaQuery minWidth={1200}>{isLoggedIn && <Navigation />}</MediaQuery> */}

			{/* {isLoggedIn ? <UserMenu /> : <WelcomePage />} */}

			<UserMenu />
			<BurgerMenu />
		</HeaderStyled>
	);
};

export default Header;
