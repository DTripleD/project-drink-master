import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { HeaderStyled, MenuWrepper, UserMenuWrapper } from "./Header.styled";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { Burger, Menu } from "./BurgerMenu/BurgerMenu";
import MediaQuery from "react-responsive";
import { useState } from "react";
import { MainContainer } from "../MainContainer/MainContainer";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [open, setOpen] = useState(false);

  return (
    <MainContainer>
      <HeaderStyled>
        <Logo />

        <MediaQuery minWidth={1440}>{isLoggedIn && <Navigation />}</MediaQuery>

        <ThemeToggler />
        <UserMenuWrapper>
          <UserMenu />

          <MenuWrepper>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </MenuWrepper>
        </UserMenuWrapper>
      </HeaderStyled>
    </MainContainer>
  );
};

export default Header;
