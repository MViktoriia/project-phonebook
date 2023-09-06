import styled from 'styled-components';

import { homeBg1, mainBg } from 'media';

export const StyledSection = styled.section<{$sectionBg?: string;}>`
    /* background-image: url(${props => props.$sectionBg || mainBg}); */
    /* background-repeat: no-repeat;
    background-size: 100%;
    background-position: top 50px; */
    width: 100vw;
    height: 100vh;
    padding-top: 20px;
`