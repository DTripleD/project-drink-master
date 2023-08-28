import { slide as Menu } from "react-burger-menu";
import { ReactComponent as OpenMenuIcon } from "../../../images/svg/align-justify.svg";
import { ReactComponent as CloseMenuIcon } from "../../../images/svg/close.svg";
import {
	MenuWrepper,
	getStyledOpenIcon,
	getStyledCloseIcon,
} from "./BurgerMenu.styled";
import { useEffect, useState } from "react";
import { Navigation } from "../Navigation/Navigation";

const StyledOpenIcon = getStyledOpenIcon(OpenMenuIcon);
const StyledCloseIcon = getStyledCloseIcon(CloseMenuIcon);

export const BurgerMenu = () => {
	const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

	const handleOpenMenu = () => {
		setIsOpenBurgerMenu(true);
		return;
	};

	const handleCloseMenu = () => {
		setIsOpenBurgerMenu(false);
		return;
	};

	useEffect(() => {
		handleOpenMenu();

		return handleCloseMenu();
	}, []);

	return (
		<MenuWrepper>
			{!isOpenBurgerMenu ? (
				<Menu
					right
					width={"100%"}
					customBurgerIcon={<StyledOpenIcon />}
					onOpen={handleOpenMenu}
				>
					<Navigation />
				</Menu>
			) : (
				<Menu
					right
					width={"100%"}
					customBurgerIcon={<StyledCloseIcon />}
					// onClose={handleCloseMenu}
				>
					<Navigation />
				</Menu>
			)}
		</MenuWrepper>
	);
};
