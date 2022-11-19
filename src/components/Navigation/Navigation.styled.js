import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
    display: inline-block;
    padding: 16px 8px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    &.active {
        color: orangered;    
    }
`;