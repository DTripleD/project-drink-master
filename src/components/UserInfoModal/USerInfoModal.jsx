import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { selectUser } from "../../redux/auth/selectors";
import { ReactComponent as Plus } from "../../images/svg/add-photo.svg";
import { ReactComponent as Cross } from "../../images/svg/close.svg";
import { ReactComponent as editSVG } from "../../images/svg/edit.svg";

import {
  BackDrop,
  Modal,
  CloseBtn,
  getStyledEdit,
  getStyledCloseIcon,
  getStyledPlus,
  AvatarWrapper,
  Avatar,
  AvatarInput,
  AvatarIcon,
  InputWrapper,
  Input,
  InputIcon,
  SaveButton,
} from "./UserInfoModal.styled";
import { useDispatch, useSelector } from "react-redux";

const modalRoot = document.querySelector("#modal-root");
const StyledCloseIcon = getStyledCloseIcon(Cross);
const StyledEditSvg = getStyledEdit(editSVG);
const StyledPlusSvg = getStyledPlus(Plus);

export const UserInfoModal = ({ handleModalClose, handleBackdropClick }) => {
  //   const dispatch = useDispatch();
  const { name, avatarURL } = useSelector(selectUser);
  const [image, setImage] = useState({ preview: avatarURL, data: null });
  const [userName, setUserName] = useState(name);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const userInfoFormSubmit = (e) => {
    e.preventDefault();

    if (userName === name && !image.data) {
      setIsButtonEnabled(false);

      return;
    }
    const updatedUserName = e.target.elements.user_name.value;
    setUserName(updatedUserName);

    const formData = new FormData();
    formData.append("file", image.data);
    formData.append("userName", userName);

    // dispatch(update(formData));

    // handlerEditProfileClick();
  };

  const onImageChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
    setIsButtonEnabled(true);
  };

  const onNameChange = (e) => {
    if (userName !== e.target.value) {
      setIsButtonEnabled(true);
    }
  };

  useEffect(() => {
    if (userName !== name) {
      setIsButtonEnabled(true);
    }
  }, [userName, name]);

  useEffect(() => {
    const userImage = document.getElementById("user_image");
    if (image.preview) {
      userImage.src = image.preview;
    }
    return () => {
      if (image.preview) {
        URL.revokeObjectURL(image.preview);
      }
    };
  }, [image.preview]);

  // const handleUploadClick = (event) => {
  // 	const file = event.target.files[0];

  // 	const reader = new FileReader();
  // 	if (file) {
  // 		reader.readAsDataURL(file);
  // 		reader.onloadend = () => {
  // 			setImage(reader.result);
  // 			getFile(file);
  // 		};
  // 	}
  // };

  return createPortal(
    <BackDrop onClick={handleBackdropClick}>
      <Modal>
        <CloseBtn onClick={handleModalClose} type="button">
          {StyledCloseIcon}
        </CloseBtn>
        <form onSubmit={userInfoFormSubmit}>
          <AvatarWrapper>
            <Avatar src={avatarURL} alt="user photo" id="user_image" />
            <AvatarInput
              type="file"
              id="file_upload"
              name="avatarURL"
              onChange={onImageChange}
            />
            <label htmlFor="file_upload">
              <AvatarIcon>
                <use href={StyledPlusSvg}></use>
              </AvatarIcon>
            </label>
          </AvatarWrapper>
          <InputWrapper>
            <Input
              type="text"
              id="user_name"
              name="user_name"
              onChange={onNameChange}
            />
            <InputIcon>
              <use href={StyledEditSvg}></use>
            </InputIcon>
          </InputWrapper>
          <SaveButton disabled={!isButtonEnabled}>Save changes</SaveButton>
        </form>
      </Modal>
    </BackDrop>,
    modalRoot
  );
};
