import styled from "@emotion/styled";

export const StyledButton = styled.button`
color:${(props)=> props.theme.colors.black};
background-color:${(props)=> props.theme.colors.white};
border-radius:42px;
padding: 14px 40px;
margin-top:40px;
margin-bottom:80px;
font-size: 14px;
font-weight: 600;
line-height: (18/14);
transition: 0.3s ease;
&:hover,
&focus,
&:active {
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  border-color:${(props) => props.theme.colors.white};
}
@media ${(props)=> props.theme.device.tablet}{
  fonst-size:16px;
  line-height:calc(18/16);
}
`