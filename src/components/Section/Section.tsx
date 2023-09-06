import React from 'react'
import { StyledSection } from './Section.styles';

type Props = {
    children: React.ReactNode;
}

function Section({children}: Props) {
  return (
    <StyledSection>{children}</StyledSection>
  )
};

export default Section