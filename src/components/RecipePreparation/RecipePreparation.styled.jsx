import styled from "@emotion/styled";

export const Wrapper = styled.div`
padding-top:40px;
padding-bottom:80px;
@media ${(props) => props.theme.device.tablet}{
    padding-top:50px;
    padding-bottom:140px;
}
`

export const Title = styled.h2`
color: ${(props)=> props.theme.colors.white};
font-weight: 600;
font-size: 28px;
line-height: calc(32/28);
@media ${(props) => props.theme.device.tablet}{
    font-size: 40px;
    line-height: calc(42/40);
}
@media ${(props) => props.theme.device.desktop}{
margin-bottom:60px;
}
` 
export const P1 = styled.p`
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
export const P2 = styled.p`
font-size: 14px;
font-weight: 400;
line-height: calc(18/14);
@media ${(props)=> props.theme.device.tablet}{
    font-size: 16px;
    line-height: calc(22/16);
}

`
export const DIV1 = styled.div`
margin-top:40px;
@media ${(props)=> props.theme.device.desktop}{
    margin-top:60px;
    display:flex;
    flex-direction:row-reverse;
    justify-content:space-between;
}
`
export const DIV2 = styled.div`
margin-bottom:46px;
@media ${(props)=> props.theme.device.tablet}{
    margin-bottom:40px;
}
@media ${(props)=> props.theme.device.desktop}{
    margin-bottom:0;
}
`
export const UL = styled.ul`
margin-top:60px;
display:flex;
flex-direction:column;
gap:14px;
list-style-type: disc;
`
export const Li = styled.li`
border-bottom: 1px solid rgba(243, 243, 243, 0.2);
padding-bottom:14px;

`
export const IMG = styled.img`
 border-radius:8px;
  width: 100%;
  height: auto;
`
export const DIV3 = styled.div`
width:335px;
border-radius:8px;
height:430px;
overflow:hidden;
@media ${(props)=> props.theme.device.tablet}{
    width:704px;
}
@media ${(props)=> props.theme.device.desktop}{
    width:400px;

`