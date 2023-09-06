import React from 'react'
import { StyledHeading } from './Heading.styled';

type Props = {
  children: React.ReactNode; 
}

function Heading({children}: Props) {
  return (
    <StyledHeading>{children}</StyledHeading>
  )
}

export default Heading;