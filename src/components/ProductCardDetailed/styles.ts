import { css } from "@emotion/react";
import { Button } from "@mui/material";
import styled from "styled-components";


interface InfoProps {
  destaque: boolean;
}

export const ContainerItem = styled.div`
  background: #d4a9a7;
  display: flex;
  width: 100%;
  height: 40%;
  padding: 3% 15% 5%;
  row-gap: 5px;
`;

export const StyledImg = styled.img`
width: 55%;
height: 15rem;
`;

export const StyledName = styled.h3`
  font-size: 1.5rem;
`;

export const StyledDescription = styled.p`
  font-size: 1rem;
`;

export const StyledPrice = styled.p`
  font-size: 1rem;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: start;
  align-items: start;
  padding: 1.5rem 0.6rem;
  gap: 1rem;
  
`;

export const StyledButton = styled(Button)`
  position: absolute;
  }
`;
