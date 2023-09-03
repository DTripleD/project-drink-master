import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  border-bottom: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.colors.white
        : "rgba(243, 243, 243, 0.2)"};

  width: 100%;
  box-sizing: border-box;
`;

export const MenuWrepper = styled.div`
  // margin-left: 14px;
  z-index: 800;

  @media (min-width: 768px) {
    margin-left: 24px;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;
