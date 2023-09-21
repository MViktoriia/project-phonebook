import Container from "components/Container/Container";
import { Phonebook } from "components/Phonebook";
import Section from "components/Section/Section";
import { StyledMain } from "pages/HomePage/HomePage.styled";

export default function ContactsPage() {
    return (
        <StyledMain>
            <Section>
                <Container>
                    <Phonebook/>   
                </Container>
            </Section>
        </StyledMain>
    )
}
