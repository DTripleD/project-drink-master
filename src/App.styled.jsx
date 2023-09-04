import styled from "@emotion/styled";

export const AppWrapper = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.colors.backgroundLight
      : theme.colors.dark};
`;
