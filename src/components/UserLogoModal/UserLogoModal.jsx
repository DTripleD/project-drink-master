import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
// import { logOut } from "redux/auth/operations";
// import { logOut } from "../../redux/auth/operations";
const modalRoot = document.querySelector("#modal-root");

import { ReactComponent as editSVG } from "../../images/svg/edit.svg";
import {
  getStyledEdit,
  BackDrop,
  Modal,
  EditButton,
  SvgButton,
  LogOutButton,
} from "./UserLogoModal.styled";
import { logout } from "../../redux/auth/operations";

const StyledEditSvg = getStyledEdit(editSVG);

export const UserLogoModal = ({ handleModalClose }) => {
  const dispatch = useDispatch();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        handleModalClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleModalClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleModalClose();
    }
  };

  return createPortal(
    <BackDrop onClick={handleBackdropClick}>
      <Modal>
        <EditButton type="button">Edit profile</EditButton>
        <SvgButton>{<StyledEditSvg />}</SvgButton>
        <LogOutButton onClick={handleLogout} type="button">
          Log out
        </LogOutButton>
      </Modal>
    </BackDrop>,
    modalRoot
  );
};
