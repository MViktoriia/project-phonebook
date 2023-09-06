import Container from 'components/Container/Container'
import Heading from 'components/Heading/Heading'

import LoginForm from 'components/LoginForm/LoginForm'
import Section from 'components/Section/Section'


import { HeaderWrapper} from 'pages/RegisterPage/RegisterPage.styled'
import React from 'react'

export default function LoginPage() {
    return (
        <main>
            <Section>
                <Container>
                    <HeaderWrapper>
                        <Heading>Login form</Heading>
                    </HeaderWrapper>
                    <LoginForm/>
                </Container>
            </Section>    
        </main>        
    )
}
