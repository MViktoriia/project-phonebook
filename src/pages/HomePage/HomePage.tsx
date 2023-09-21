import React from 'react'
import { CircleBig, CircleMedium, CircleWite, HomeContainer, HomeHeading, Orbit, Phone, StyledMain, Text, TextWrapper } from './HomePage.styled'
import Section from 'components/Section/Section'



export default function HomePage() {
    return (
        <StyledMain>
            <Section>
                <HomeContainer>
                    <TextWrapper>
                        <HomeHeading>Welcome to your Phonebook</HomeHeading>
                        <Text>Keep all your contacts in one place</Text> 
                    </TextWrapper>
                    <CircleBig/>
                    <CircleMedium/>
                    <Orbit/>
                    <CircleWite/>
                    <Phone/>
                </HomeContainer>
            </Section>
        </StyledMain>
    )
}
