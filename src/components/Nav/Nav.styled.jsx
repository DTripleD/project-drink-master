import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const StyledNavLink = styled(NavLink)`
  
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
    
  // &.active {
  //   font-weight: 700;
  //   text-decoration: underline;
    
  //   &:after {
  //     display: none;
  //   }
  // }
  
  &:after {
    content: '';
    display: block;
    height: 1px;
    background: ${(props) => props.theme.colors.white};
    transition: width 0.3s ease, left 0.3s ease;
    width: 0;
  }
  
  &:hover:after {
     width: 100%;
    
  }
`;

export const StyledNavButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  background-color: transparent;
  border: none;

  padding: 0;
 
  text-align: left;


  &:after {
    content: "";
    display: block;
    height: 1px;
    background: ${(props) => props.theme.colors.white};
    transition: width 0.3s ease, left 0.3s ease;
    width: 100%;
  }
`;

export const StyledListItem = styled.li`
  list-style: none;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

