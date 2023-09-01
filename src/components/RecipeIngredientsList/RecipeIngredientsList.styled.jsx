import styled from "@emotion/styled";

export const P1 = styled.p`
  font-size: 16px;
  color: rgba(243, 243, 243, 0.5);
  line-height: calc(20/16);
  margin-bottom:20px;
  @media ${(props)=> props.theme.device.tablet}{
    margin-bottom:24px;
  }
`;
export const P2 = styled.p`
font-size: 16px;
  color: ${(props)=> props.theme.colors.grey};
  line-height:calc(20/16);
`
export const IMG = styled.img`
padding:25px;
background-color:${(props)=> props.theme.colors.blue};
width:157px;
height:157px;
border-radius: 8px;
@media ${(props)=> props.theme.device.tablet}{
  width:220px;
  height:220px;
    padding:32px;
}
`
export const List = styled.ul`
display:flex;
flex-wrap:wrap;
gap:20px;
@media ${(props)=> props.theme.device.tablet}{
  gap:22px;
}
@media ${(props)=> props.theme.device.desktop}{
  gap:30px;
}
`

export const DIV = styled.div`
display: flex;
	justify-content: space-between;
	align-items: center;
  margin-top:8px;
`
export const IngredientTitle = styled.h3`
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: calc(18/14);
@media ${(props)=> props.theme.device.tablet}{
font-size: 18px;
line-height: calc(24 / 18);
}
`
export const Wrapper = styled.div`
padding-bottom:40px;
@media ${(props) => props.theme.device.tablet}{
  padding-bottom:50px;
}
`