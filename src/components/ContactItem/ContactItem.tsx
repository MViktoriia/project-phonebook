import { StyledButton, Contact, ContactName, ContactNamber, ContactInfo } from './ContactItem.styled';

type Props = {
    id: string;
    name: string;
    number: string;
    onClick: (id: string)=> void;
}

const ContactItem = ({ id, name, number, onClick }: Props) => {
    return (
        <>
            <Contact>
                <ContactInfo>
                    <ContactName>{name}</ContactName>
                    <ContactNamber>{number} </ContactNamber>
                </ContactInfo>
                <StyledButton type='button' onClick={()=> onClick(id)}>X</StyledButton>
            </Contact>
        </>
    );
}; 


export default ContactItem;