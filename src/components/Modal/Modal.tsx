import React from 'react';
import { Backdrop, ModalStyled } from './Modal.styled';

type Props = {
    children: React.ReactNode;
    onClose: ()=>void;
}

function Modal({children, onClose}: Props) {
  return (
    <Backdrop onClick={onClose}>
        <ModalStyled onClick={(event) => event.stopPropagation()}>
            {children}
        </ModalStyled>
    </Backdrop>
  )
}

export default Modal;