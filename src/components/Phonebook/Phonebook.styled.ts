import styled from 'styled-components';

export const StyledPhonebook = styled.div`
    position: relative;
    max-width: 800px;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
    font-family: Roboto, Verdana, Tahoma, sans;
    padding: 100px 25px;
`

export const AddContactButton = styled.button`
    position: absolute;
    top: 50px;
    right: 50px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-color: transparent;
    background-color:  rgba(64, 163, 248, 0.5);
    color: white;
    font-size: 50px;
    transition: all .25s cubic-bezier(0.42, 0, 0.45, 0.96);
    &::before{
        content:"+";
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color:  rgba(64, 163, 248, 0.2);
        box-shadow: 0px 4px 22px 0px rgba(0, 0, 0, 0.05);
        transition: all .25s cubic-bezier(0.42, 0, 0.45, 0.96);

    }
    &:hover,:focus{
        background-color:  #40A3F8;
        box-shadow: 0px 4px 22px 0px rgba(0, 0, 0, 0.1);
        &::before{
            top:-25px;
            right:-25px;
            width: 150px;
            height: 150px;            
            background-color:  rgba(64, 163, 248, 0.2);
            box-shadow: 0px 4px 22px 0px rgba(0, 0, 0, 0.06);
        }
    }


`