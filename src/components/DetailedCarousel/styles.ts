import styled, { css } from "styled-components";
import { Paper, Button, Typography, Box } from "@mui/material";
import "react-alice-carousel/lib/alice-carousel.css";
import { Carousel } from "react-responsive-carousel";

export const StyledPaper = styled(Paper)`
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledImagem = styled.img`
    width: 100%;
    height: 25rem;
`;

export const SyledCarrosel = styled(Carousel)`

&&&{
    padding-inline-start: 0 !important; 
}
`



