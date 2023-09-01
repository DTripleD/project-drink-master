import { ReactComponent as OpenMenuIcon } from "../../../images/svg/align-justify.svg";
import { ReactComponent as CloseMenuIcon } from "../../../images/svg/close.svg";
import {
	StyledMenu,
	StyledBurger,
	getStyledOpenIcon,
	getStyledCloseIcon,
} from "./BurgerMenu.styled";

import { Navigation } from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const StyledOpenIcon = getStyledOpenIcon(OpenMenuIcon);
const StyledCloseIcon = getStyledCloseIcon(CloseMenuIcon);

export const Menu = ({ open, setOpen }) => {
	const location = useLocation();

	useEffect(() => {
		setOpen(false);
	}, [location.pathname]);

	return (
		<StyledMenu open={open}>
			<Navigation />
		</StyledMenu>
	);
};

export const Burger = ({ open, setOpen }) => {
	return (
		<StyledBurger open={open} onClick={() => setOpen(!open)}>
			{!open ? <StyledOpenIcon /> : <StyledCloseIcon />}
		</StyledBurger>
	);
};
