import styled from 'styled-components';

export const StyledButton = styled.button`
    border: none;
    background: #40A3F8;
    cursor: pointer;
    border-radius: 5px;
    color: #FFF;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    padding: 8px 20px;
   
    &:hover {
        background: #39a1f4;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
    &:active {
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
    
`