import React from 'react'
import { StyledSection } from 'components/Section/Section.styles'
import { CircleBig, CircleMedium, CircleWite, HomeContainer, HomeHeading, Orbit, Phone, Text, TextWrapper } from './HomePage.styled'



export default function HomePage() {
    return (
        <main>
            <StyledSection>
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
            </StyledSection>
        </main>
    )
}
