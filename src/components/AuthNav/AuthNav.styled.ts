import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
    display: inline-block;
    color: #6e5f5f;
    padding: 16px 10px;
    text-decoration: none;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    font-style: normal;
    &.active {
        color: #40a3f8;
    }
    text-decoration: none;
    
`;