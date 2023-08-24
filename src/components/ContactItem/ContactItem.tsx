import { StyledButton, Contact } from './ContactItem.styled';

type Props = {
    id: string;
    name: string;
    number: string;
    onClick: (id: string)=> void;
}

const ContactItem = ({ id, name, number, onClick }: Props) => {
    return (
        <>
            <Contact>{name}: {number} <StyledButton type='button' onClick={()=> onClick(id)}>Delite</StyledButton></Contact>
        </>
    );
}; 


export default ContactItem;