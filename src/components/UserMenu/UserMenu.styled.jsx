import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
`;

export const StyledButton = styled.button`
    border: none;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 12px;
    font-family: Roboto, Verdana, Tahoma, sans;
    padding: 8px 20px;
    margin: 10px 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    border-radius: 100px;
    color: #fff;
    background: #2196F3;
    &:hover {
        background: #39a1f4;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
    &:active {
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        background: #0d8aee;
    }
`
