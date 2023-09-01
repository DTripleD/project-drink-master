import styled from "@emotion/styled";

export const P1 = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.grey};
  line-height: calc(14/12);
  margin-bottom:8px;

  @media ${(props)=> props.theme.device.tablet} {
    font-size: 14px;
    line-height:calc(20/14);
  }
`;

export const P2 = styled.p`
color:${(props) => props.theme.colors.white};
font-size: 14px;
font-weight: 400;
line-height: calc(18/14);
@media ${(props)=> props.theme.device.tablet}{
width:593px;
font-size: 16px;
line-height: calc(24/16);
}
`;

export const IMG = styled.img`
width:335px;
height:400px;
border-radius:8px;
@media ${(props)=> props.theme.device.tablet}{
    width:704px;
}
@media ${(props)=> props.theme.device.desktop}{
    width:400px;
}
`
export const Wrapper = styled.div`
padding-top:58px;
padding-bottom-40px;
@media ${(props)=> props.theme.device.tablet} {
  padding-top: 80px;
  padding-bottom: 80px;
 }

@media ${(props)=> props.theme.device.desktop}{
  padding-top:132px;
  padding-bottom:100px;
  display:flex;
  justify-content: space-between;
}
`