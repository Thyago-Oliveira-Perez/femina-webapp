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
  
`;

export const StyledImg = styled.img`
width: 55%;
height: 15rem;
`;

export const StyledName = styled.p`
  font-size: 1.5rem;
  width: 100%;
  line-height: 30px;
  display: flex;
`;

export const StyledDescription = styled.p`
  font-size: 16px;
  line-height: 25px;
  width: 100%;
`;

export const StyledPrice = styled.p`
  font-size: 20px;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: start;
  align-items: start;
  padding: 1.5rem 0.6rem;
  gap: 2rem;
  
`;

export const StyledButton = styled(Button)`
  position: absolute;
  }
`;

export const StyledHr = styled.hr`
  background:white;
  width: 100%;
  border: none;
  padding: 1px;
`

export const StyledHeadComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

