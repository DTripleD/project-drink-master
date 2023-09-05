import styled from "@emotion/styled";

export const SubContainer = styled.div`
  margin-top: 80px;
  position: relative;
`;

export const Textarea = styled.textarea`
  resize: none;
  padding: 16px 18px;
  width: 335px;
  height: 184px;
  border-radius: 14px;
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.colors.white
        : theme.colors.lightGrey};
  background-color: transparent;
  margin-top: 40px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.white};
  font-family: Manrope;
  font-size: 14px;
  line-height: ${18 / 14};
  ::placeholder {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.colors.white
        : theme.colors.lightGrey};
    font-family: Manrope;
    font-size: 14px;
    line-height: ${18 / 14};
    @media (min-width: 768px) {
      font-size: 17px;
      line-height: 156%;
    }
  }
  @media (min-width: 768px) {
    width: 480px;
    font-size: 17px;
    line-height: 156%;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 14px;
  position: absolute;
  bottom: 40px;
  left: 18px;
`;
