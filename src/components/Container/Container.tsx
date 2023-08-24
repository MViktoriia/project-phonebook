import React from 'react'
import { ContainerStyled } from './Container.styled';

type Props = {
    children: React.ReactNode;
}

function Container({children}: Props) {
  return (
    <ContainerStyled>{children}</ContainerStyled>
  )
}

export default Container;