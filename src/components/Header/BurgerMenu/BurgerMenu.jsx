import PropTypes from "prop-types";
import { ReactComponent as OpenMenuIcon } from "../../../images/svg/align-justify.svg";
import { ReactComponent as CloseMenuIcon } from "../../../images/svg/close.svg";
import {
  StyledMenu,
  StyledMenuBtn,
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
    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (!open) {
        document.body.style.overflow = "";
      }
    };
  });

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <StyledMenu open={open}>
      <StyledMenuBtn
        type="button"
        aria-label="close burgermenu"
        onClick={() => setOpen(!open)}
      >
        {<StyledCloseIcon />}
      </StyledMenuBtn>
      <Navigation />
    </StyledMenu>
  );
};

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
      aria-label="open burgermenu"
    >
      {<StyledOpenIcon />}
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

Menu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
