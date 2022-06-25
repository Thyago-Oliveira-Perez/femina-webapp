import styled, { css } from 'styled-components'
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { Modal } from '@mui/material';

interface ModalProps {
  width?: string | string[] | { base?: string; lg?: string };
  variantType: string;
}

interface ModalBodyProps {
  width?: string;
  fontSize: string;
  variantType: string;
}

export const ModalContainer = styled(Modal)``;

export const ModalContent = styled.div<ModalProps>`
  ${({ width, variantType }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: ${width || '60%'};

    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    border: none;
    max-height: calc(100vh - 10rem);

    & .MuiGrid-item {
      padding: 1rem;
    }

    footer {
      display: flex;
      justify-content: flex-end;
      gap: 2rem;
    }

    h2 {
      margin: 1.5rem 0;
      text-align: center;
      color: #7A0000;
    }

    ${variantType === 'external' &&
    css`
      overflow-y: auto;
    `}

    padding: ${() => {
      switch (variantType) {
        case 'external':
          return '2rem 3rem';
        case 'internal':
          return '4rem 3rem';
      }
    }};
  `}
`;

export const ModalHeader = styled.div<ModalProps>`
  ${({ variantType }) => css`
    display: flex;
    justify-content: flex-end;

    svg {
      cursor: pointer;
    }

    ${variantType === 'internal' &&
    css`
      position: fixed;
      top: 1rem;
      right: 1rem;
    `}
  `}
`;

export const ModalBody = styled.div<ModalBodyProps>`
  ${({ width, fontSize, variantType }) => css`
    width: ${width};
    margin: 0 auto;
    font-size: ${fontSize};
    ${variantType === 'internal' &&
    css`
      overflow-y: auto;
    `}
  `}
`;

export const StyledCloseIcon = styled(AiOutlineCloseSquare)`
  &&& {
    ${({ theme }) => css`
      color: #7A0000;
    `}
  }
`;
