import styled from "@emotion/styled";

export const P1 = styled.p`
  font-size: 16px;
  color: rgba(243, 243, 243, 0.5);
  line-height:20px;
`;

export const IMG = styled.img`
padding:25px;
background-color:rgba(22, 31, 55, 0.50);
width:157px;
height:157px;
border-radius: 8px;
@media screen and (min-width:768px){
  width:220px;
  height:220px;
    padding:32px;
}
`
export const List = styled.ul`
display:flex;
flex-wrap:wrap;
gap:20px;
@media screen and (min-width:768px){
  gap:22px;
}
@media screen and (min-width:1440px){
  gap:30px;
}
`
export const P2 = styled.p`
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 18px;
`
export const DIV = styled.div`
display: flex;
	justify-content: space-between;
	align-items: center;
`