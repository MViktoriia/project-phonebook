import React from 'react'
import { StyledButton } from './Button.styled';

type Props = {
    children: React.ReactNode;
    onClick: ()=> void;
}

function Button({children, onClick}: Props) {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
};

export default Button;