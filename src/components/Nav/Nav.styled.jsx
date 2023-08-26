import { NavLink } from 'react-router-dom';
import styled from "@emotion/styled";

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  position: relative;
  color: #F3F3F3;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(22.4 / 14);
  &.active {
    font-weight: 700;
    text-decoration: underline;
    &:after {
      display: none;
    }
  }
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: #F3F3F3;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

export const StyledNavButton = styled.button`
  display: inline-block;
  position: relative;

  color: #F3F3F3;

  font-size: 14px;
  font-weight: 500;
  line-height: calc(22.4 / 14);
  background-color: transparent;
  border: none;
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    left: 0;
    position: absolute;
    background: #F3F3F3;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 100%;
  }
`;

export const StyledListItem = styled.li`
  height: 23px;
  list-style: none;
  &:not(:last-of-type) {
    margin-bottom: 14px;
    @media (min-width: 768px) {
      margin-bottom: 16px;
    }
    @media (min-width: 1440px) {
      margin-bottom: 24px;
    }
  }
`;