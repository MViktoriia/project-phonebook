import { mainBg } from 'media';
import styled from 'styled-components';

export const StyledHeader = styled.header`

    /* background: url(${mainBg}),lightgray 50% / cover no-repeat; */
    position: fixed;
    padding-top: 10px;
    padding-bottom: 5px;
    z-index: 2;
`

export const StyledNav = styled.nav`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`