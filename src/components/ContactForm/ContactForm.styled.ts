import styled from 'styled-components';

export const StyledForm = styled.form`
    margin: 0 auto;
    max-width: fit-content;
    min-width: 250px;
    padding: 30px 30px 30px 30px;
    /* border: 1px solid; */
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.15);
`
export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 10px;
`

export const StyledInput = styled.input`
    display: block;
    margin-top: 5px;
    padding: 5px;
    border-width: 1px;
    border-style: solid;
    border-radius: 15px;
    border-color: #c8c5c5;
    height: 25px;
    width: 95%;
`
export const StyledButton = styled.button`
    border: none;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 12px;
    font-family: Roboto, Verdana, Tahoma, sans;
    padding: 12px 16px;
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