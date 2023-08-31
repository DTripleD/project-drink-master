import styled from "@emotion/styled";

export const P1 = styled.p`
  font-size: 12px;
  color: rgba(243, 243, 243, 0.5);
  line-height:14px;
  margin-bottom:8px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height:20px;
  }
`;

export const P2 = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 18px; /* 128.571% */
@media screen and (min-width:768px){
width:593px;
font-size: 16px;
line-height: 22px;
}
`;

export const IMG = styled.img`
width:335px;
height:400px;
@media screen and (min-width:768px){
    width:704px;
}
@media screen and (min-width:1440px){
    width:400px;
}
`