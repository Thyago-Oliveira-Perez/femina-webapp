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

export const StyledButton = styled(Button)`
  position: absolute;
  width: 85px;
  height: 30px;
  background: #d4a9a7;
  color: #000000;
  font-family: "Roboto";
  font-height: 400;
  font-size: 10px;
  line-height: 15px;
  transition: all 0.8s;
  &:hover {
    background: #a77371;
  }
`;

