import styled, { keyframes } from 'styled-components';
import { phoneImg } from 'media';
import { ContainerStyled } from 'components/Container/Container.styled';
import { StyledHeading } from 'components/Heading/Heading.styled';

const moovingText = keyframes`
    from {
            transform: 
                    translate(100%)
    }                   
    to {
            transform: translate(0);
    }   
`

export const StyledMain = styled.main`
    height: 100%;
    min-height: 100vh;
`

export const HomeContainer = styled(ContainerStyled)`
    position: relative;
`

export const TextWrapper = styled.div`
    text-align: center;
    padding-top: 30vh;
    padding-left: 40px;
    width: 50%;
    overflow-y: hidden;
`

export const HomeHeading = styled(StyledHeading)`
    animation: ${moovingText} linear;
    animation-duration: 3s;
`

export const Text = styled.p`
    margin-block: 0;
    animation: show linear;
    animation-duration: 2.5s;
    @keyframes show {
        0% {
                opacity: 0 ;
        }                   
        100% {
                opacity: 1;
        }
    }
`

export const CircleBig = styled.div`
    position: absolute;
    width: 585px;
    height: 585px;
    border-radius: 50%;
    background: rgba(64, 163, 248, 0.08);
    top: 25px;
    right: 40px;
    animation: breath linear;
    animation-duration: 3s;
    /* transform: scale(5); */
    pointer-events: none;
    transform: translateY(-30px);
    @keyframes breath {
        0% {
                transform: 
                           scale(1);
        }
        50% {
                transform: scale(5)
                           translateY(-15px);

        }
        100% {
                transform: scale(1)
                           translateY(-30px);
        }
    }
`
export const CircleMedium = styled.div`
    position: absolute;
    width: 442px;
    height: 442px;
    border-radius: 50%;
    background: rgba(64, 163, 248, 0.08);
    top: 95px;
    right: 110px;
    animation: breath linear;
    animation-duration: 3s;
    pointer-events: none;
    /* transform: scale(5); */
    transform: translateY(-30px);
    
    @keyframes breath {
        0% {
                transform: 
                           scale(1);
        }
        50% {
                transform: scale(5)
                           translateY(-15px);

        }
        100% {
                transform: scale(1)
                           translateY(-30px);
        }
    }

`
export const Orbit = styled.div`
    position: absolute;
    width: 330px;
    height: 330px;
    border-radius: 50%;
    border: 2px solid #FFF;
    box-shadow: 0px 2px 4px 0px rgba(100, 100, 100, 0.04);
    top: 148px;
    right: 165px;
    transform: translateY(-30px);

    ::before, ::after {
        content: "";
        position: absolute;
        top: 158px; left: 158px; bottom: 0; z-index: 1;
        animation: spin linear infinite;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: linear-gradient(135deg, #FFF8F8 0%, #F8F1F1 100%);
        filter: drop-shadow (0px 2px 4px rgba(100, 100, 100, 0.04));
    }
    ::before {
        animation-duration: 10s;
    }
    ::after {
        animation-duration: 12s;
    }
    @keyframes spin {
        from {
                transform: rotate(0deg)
                           translate(-164px)
                           rotate(0deg);
        }
        to {
                transform: rotate(360deg)
                           translate(-164px)
                           rotate(-360deg);
        }
    }    
`
export const CircleWite = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #FFF;
    box-shadow: 0px 4px 22px 0px rgba(0, 0, 0, 0.05);
    top: 240px;
    right: 255px;
    transform: translateY(-30px);
`

export const Phone = styled.div`
    position: absolute;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-image: url(${phoneImg});
    background-color: #fff;
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: 0px 4px 22px 0px rgba(0, 0, 0, 0.05);
    top: 278px;
    right: 293px;
    transform: translateY(-30px);
`