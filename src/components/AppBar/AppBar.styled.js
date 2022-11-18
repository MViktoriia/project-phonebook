import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Link = styled(NavLink)`
    padding: 16px 8px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    &.active {
        color: orangered;    
    }
`;