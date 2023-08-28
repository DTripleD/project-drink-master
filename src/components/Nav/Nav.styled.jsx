import { NavLink } from 'react-router-dom';
import styled from "@emotion/styled";

export const StyledNavLink = styled(NavLink)`
  
  color: #F3F3F3;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  

  
  
  &.active {
    font-weight: 700;
    text-decoration: underline;
    &:after {
      display: none;
    }
  }
  
  &:after {
    content: '';
    display: block;
    height: 1px;
    background: #F3F3F3;
    transition: width 0.3s ease, left 0.3s ease;
    width: 0;
  }
  
  &:hover:after {
    width: 100%;
    
  }

  @media (min-width: 768px) {
   
    

`;

export const StyledNavButton = styled.button`
  
  
  color: #F3F3F3;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  background-color: transparent;
  border: none;
  text-align: left;
  
  &:after {
    content: '';
    display: block;
    height: 1px;
    background: #F3F3F3;
    transition: width 0.3s ease, left 0.3s ease;
    width: 100%;
  }
`;

export const StyledListItem = styled.li`
  list-style: none;
  margin-bottom: 14px;
  
  
  @media (min-width: 768px) {
    margin-bottom: 16px;
    margin-left: -40px;
    
    
    
  }
  
  @media (min-width: 1440px) {
    margin-bottom: 24px;
    
  }
`;
