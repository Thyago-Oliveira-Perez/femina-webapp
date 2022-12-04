import { css } from '@emotion/react';
import { Button } from '@mui/material';
import styled from 'styled-components';

interface InfoProps {
    destaque: boolean;
}

export const ContainerItem = styled.div`
    width: 16rem;
`

export const StyledImg = styled.img`
    width: 100%;
    height: 15rem;
`;

export const StyledName = styled.h3`
    font-size: 1.5rem;
`;

export const StyledPrice = styled.p`
    color: rgba(0, 0, 0, 0.6);
    font-size: 1rem;
    margin-top: 5px;
`

export const StyledInfo = styled.div`
  ${({ destaque }:InfoProps) => destaque && `
    display: flex;
    background: #9B4A46;
    color: white;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0.6rem;
    margin-top: -0.5rem;
    p {
        color: white;
    }
  `}`;

export const StyledButtonArea = styled.div`
  position: absolute;
  width: 16rem;
  height: 15rem;
  opacity: 0;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    background: transparent;
    color: transparent;
    border: none;
  }
  
  &:hover {
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(217, 217, 217, 0.09);
  
    button:first-child {
      cursor: pointer;
      background: #9B4A46;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius:2px;
    }

    button:last-child {
      cursor: pointer;
      background: #D4A9A7;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius:2px;
    }
  }
`;
