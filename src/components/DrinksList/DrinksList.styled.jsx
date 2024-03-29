import styled from "@emotion/styled";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
    gap: 20px;
  }
`;

export const Li = styled.li`
  display: flex;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 398px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 438px;
    margin-bottom: 60px;
  }
`;

export const Img = styled.img`
  margin-bottom: 14px;
  border-radius: 8px;
  transition: transform 600ms ease;
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const P = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const P2 = styled.p`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.colors.white
      : theme.colors.lightGrey};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const P3 = styled.p`
  text-align: center;
  font-size: 30px;
  color: ${(props) => props.theme.colors.white};
`;

export const IMGWrapper = styled.div`
width:335px;
height:360px;
@media ${(props)=>props.theme.device.tablet}{
  width:342px;
}
@media ${(props)=>props.theme.device.desktop}{
  width:400px;
  height:400px;
}
`