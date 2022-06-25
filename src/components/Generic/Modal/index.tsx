import { SyntheticEvent } from 'react';
import * as S from './styles';

interface ModalProps {
    width?: string | string[] | { base?: string; lg?: string };
    title?: string;
    closeIcon?: boolean;
    children?: React.ReactNode;
    open: boolean;
    onClose?: () => void;
    bodyWidth?: string;
    fontSize?: string;
    variantType?: 'external' | 'internal';
  }

  export function Modal({
    width,
    title,
    closeIcon = true,
    children,
    open,
    onClose,
    bodyWidth = '80%',
    fontSize = '1.6rem',
    variantType = 'external'
  }: ModalProps) {
    const handleClose = (
      event: SyntheticEvent<Element, Event>,
      reason: 'backdropClick' | 'escapeKeyDown'
    ) => {
      if (reason && reason == 'backdropClick') return;
      onClose && onClose();
    };
    return (
      <S.ModalContainer open={open} onClose={handleClose}>
        <S.ModalContent width={width} variantType={variantType}>
          {closeIcon && (
            <S.ModalHeader variantType={variantType}>
              <S.StyledCloseIcon size={30} onClick={onClose} />
            </S.ModalHeader>
          )}
          <S.ModalBody
            width={bodyWidth}
            fontSize={fontSize}
            variantType={variantType}
          >
            {title && <h2>{title}</h2>}
            {children}
          </S.ModalBody>
        </S.ModalContent>
      </S.ModalContainer>
    );
  }
  