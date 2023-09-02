import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { logout } from "../../redux/auth/operations";
import { useNavigate } from "react-router";
import { LogoutBtn } from "../LogoutBtn/LogoutBtn";
import { UserInfoModal } from "../UserInfoModal/UserInfoModal";

import User from "../../images/user.png";

import { selectUser } from "../../redux/auth/selectors";
import {
  MenuWrapper,
  UserName,
  UserPhoto,
  UserPhotoWrapper,
} from "./UserMenu.styled";
import { UserLogoModal } from "../UserLogoModal/UserLogoModal";
import userDefaultPhoto from "../../images/user.png";

const UserMenu = () => {
  const { name, avatarURL = userDefaultPhoto } = useSelector(selectUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openDrop, setOpenDrop] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutModalOpen = () => {
    setShowLogoutModal(true);
    setOpenDrop(false);
  };

  const handleInfoModalOpen = () => {
    setShowInfoModal(true);
    setOpenDrop(false);
  };

  const handleModalClose = () => {
    setShowInfoModal(false);
    setShowLogoutModal(false);
    setOpenDrop(false);
  };

  const handleLogout = (event) => {
    // event.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleModalClose();
    }
  };

  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      handleModalClose();
    }
  };

  useEffect(() => {
    if (openDrop) {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("click", handleBackdropClick);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleBackdropClick);
    };
  }, [handleModalClose]);

  return (
    <>
      <MenuWrapper open={openDrop} onClick={() => setOpenDrop(!openDrop)}>
        <UserPhotoWrapper>
          <UserPhoto src={avatarURL ? avatarURL : User} alt="" />
        </UserPhotoWrapper>
        <UserName>{name}</UserName>
        {openDrop && (
          <UserLogoModal
            handleInfoModalOpen={handleInfoModalOpen}
            handleLogoutModalOpen={handleLogoutModalOpen}
          />
        )}
      </MenuWrapper>

      {showInfoModal && (
        <UserInfoModal
          handleInfoModalOpen={handleInfoModalOpen}
          handleBackdropClick={handleBackdropClick}
        />
      )}

      {showLogoutModal && (
        <LogoutBtn
          handleInfoModalOpen={handleInfoModalOpen}
          handleModalClose={handleModalClose}
          handleLogout={handleLogout}
          handleBackdropClick={handleBackdropClick}
        />
      )}
    </>
  );
};

export default UserMenu;
