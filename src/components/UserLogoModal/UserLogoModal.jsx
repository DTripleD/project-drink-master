import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { ReactComponent as editSVG } from "../../images/svg/edit.svg";
import {
  getStyledEdit,
  Drop,
  EditButton,
  SvgButton,
  LogOutButton,
} from "./UserLogoModal.styled";
import { logout } from "../../redux/auth/operations";
import { useNavigate } from "react-router";
import { LogoutBtn } from "../LogoutBtn/LogoutBtn";
import { UserInfoModal } from "../UserInfoModal/USerInfoModal";

const StyledEditSvg = getStyledEdit(editSVG);

export const UserLogoModal = ({ setOpenDrop }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);

  const handleCloseModalOpen = () => {
    setShowCloseModal(true);
  };

  const handleInfoModalOpen = () => {
    setShowInfoModal(true);
  };

  const handleModalClose = () => {
    setShowInfoModal(false);
    setShowCloseModal(false);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
    navigate("/welcome");
  };

  return (
    <>
      <Drop open={setOpenDrop}>
        <div>
          <EditButton onClick={handleInfoModalOpen} type="button">
            Edit profile
          </EditButton>
          <SvgButton>{<StyledEditSvg />}</SvgButton>
        </div>
        <LogOutButton onClick={handleCloseModalOpen} type="button">
          Log out
        </LogOutButton>
      </Drop>

      {showInfoModal && (
        <UserInfoModal handleInfoModalOpen={handleInfoModalOpen} />
      )}

      {showCloseModal && (
        <LogoutBtn handleInfoModalOpen={handleInfoModalOpen} />
      )}
    </>
  );
};
