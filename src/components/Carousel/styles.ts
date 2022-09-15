import styled, { css } from "styled-components";
import { Paper, Button, Typography, Box } from "@mui/material";

export const StyledPaper = styled(Paper)`
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const BoxArea = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const SlideArea = styled.div`
    width: 80%;
    height: 10rem;
    position: absolute;
    display : flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    color: #fff;
`;

export const ButtonArea = styled.div`
    height: 95%;
    position: absolute;
    display : flex;
    justify-content: center;
    align-items: end;
`;

export const StyledButton = styled(Button)`
    width: 130px;
    height: 28px;
    background: #D4A9A7;
    color: #000000;
    font-family: "Roboto";
    font-height: 400;
    font-size: 12px;
    line-height: 18px;
    transition: all 0.8s;
    &:hover { 
        background: #A77371;
    }
`;

export const TextTitle = styled(Typography)`
    max-width: 250px;
    color: #ffffff;
    font-family: "Roboto";
    font-height: 400;
    font-size: 2rem;
    line-height: 80px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (min-width: 1024px) {
        max-width: 100%;
        font-size: 3rem;
    }
`;

export const StyledImagem = styled.img`
    width: 100%;
    height: 25rem;
`;

