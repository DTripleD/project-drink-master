import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { HeaderStyled, MenuWrepper } from "./Header.styled";
import WelcomePage from "../../pages/WellcomPage/WellcomPage";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { Burger, Menu } from "./BurgerMenu/BurgerMenu";
import MediaQuery from "react-responsive";
import { useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";

import { UserLogoModal } from "../UserLogoModal/UserLogoModal";

const Header = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const [open, setOpen] = useState(false);

	const node = useRef();
	const navigate = useNavigate();

	return (
		<HeaderStyled>
			<Logo />

			<MediaQuery minWidth={1440}>{isLoggedIn && <Navigation />}</MediaQuery>

			{isLoggedIn ? <UserMenu /> : <WelcomePage />}

			<MenuWrepper ref={node}>
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
			</MenuWrepper>
		</HeaderStyled>
	);
};

export default Header;
