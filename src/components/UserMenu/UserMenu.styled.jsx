import styled from "@emotion/styled";

export const UserPhotoWrapper = styled.div`
  max-width: 32px;
  max-height: 32px;
  border-radius: 50%;
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.colors.backgroundLight
      : theme.colors.white};
  overflow: hidden;
  @media (min-width: 768px) {
    max-width: 44px;
    max-height: 44px;
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
`;

export const UserPhoto = styled.img`
  min-width: 32px;
  min-height: 32px;
  border-radius: 50%;

  @media (min-width: 768px) {
    min-width: 44px;
    min-height: 44px;
  }
`;
