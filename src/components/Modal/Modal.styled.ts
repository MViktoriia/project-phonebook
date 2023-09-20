import styled from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    overflow-y: scroll;
    transition-property: opacity, visibility;
    transition-duration: 250ms;
    transition-delay: cubic-bezier(0.4, 0, 0.2, 1);
`

export const ModalStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    padding: 50px 50px 50px 50px;
    background-color: #fff;
    width: fit-content;
    height: fit-content;
    border-radius: 4px;
`

