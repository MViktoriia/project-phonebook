import React from 'react'
import { StyledButton } from './Button.styled';

type Props = {
    children: React.ReactNode;
    onClick?: ()=> void;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

function Button({children, onClick, type}: Props) {
  return (
    <StyledButton type={type} onClick={onClick}>{children}</StyledButton>
  )
};

export default Button;