import Container from 'components/Container/Container'
import RegisterForm from 'components/RegisterForm/RegisterForm'
import Section from 'components/Section/Section'
import React from 'react'
import { HeaderWrapper } from './RegisterPage.styled'
import Heading from 'components/Heading/Heading'
import { StyledMain } from 'pages/HomePage/HomePage.styled'

export default function RegisterPage() {
    return (
        <StyledMain>
            <Section>
                <Container>
                    <HeaderWrapper>
                        <Heading>Register form</Heading>
                    </HeaderWrapper>
                    <RegisterForm/>
                </Container>
            </Section>       
        </StyledMain>
    )
}
