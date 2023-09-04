import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  font-size: 12px;
  font-weight: 600;
  line-height: calc(16 / 12);
  text-decoration: none;
  text-align: center;
  display: block;
  width: fit-content;
  margin: 0 auto;

  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.white};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
   
  }

   &:hover {
    color: ${(props) => props.theme.colors.white};
   }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;
