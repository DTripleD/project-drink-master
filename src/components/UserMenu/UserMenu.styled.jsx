import styled from "@emotion/styled";

export const UserPhotoWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.colors.backgroundLight
      : theme.colors.white};
  overflow: hidden;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserName = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${(props) => props.theme.colors.white};
`;

export const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 91px;

  @media (min-width: 768px) {
    width: 116px;
    gap: 14px;
  }
`;

export const UserPhoto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
