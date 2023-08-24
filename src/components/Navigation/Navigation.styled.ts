import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #6e5f5f;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  &.active {
    color: #40a3f8;
  }
  text-decoration: none;
  display: inline-block;
`;

export const NavList = styled.ul`
  display: flex;
  &.not: (: last-child) {
    margin-right: 50px;
  }
`;
