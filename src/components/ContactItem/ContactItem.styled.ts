import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 11px;
    font-family: Roboto, Verdana, Tahoma, sans;
    padding: 2px 2px 2px 2px;
    margin-left: 10px;
    border-radius: 50%;
    color: #fff;
    background: #9b59b6;
    &:hover {
        background: #a66bbe;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
    &:active {
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        background: #8f4bab;
    }
`
export const Contact = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    border-radius: 15px;
    box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.15);
    &:not(:last-child) {
        margin-bottom: 5px;
    }
`
export const ContactName = styled.div`
    margin-bottom: 5px;
`
export const ContactNamber = styled.div`
    color: #6e5f5f;
    font-size: 12px;
    padding-left: 2px;
`
export const ContactInfo = styled.div``