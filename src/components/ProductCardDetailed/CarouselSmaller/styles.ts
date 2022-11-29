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
    padding-inline-start: 40px;
`;

export const SyledCarrosel = styled(Carousel)`
    ul {
        padding-inline-start: 0px;
    }

    .carousel .control-dots .dot {
        width: 5px;
        height: 5px;
    }   

    .carousel .thumb.selected, .carousel .thumb {
        border: 1px solid #c2c2c2;
        cursor: pointer;
    }

    .carousel .thumb.selected, .carousel .thumb:focus {
        border: 1px solid #9B4A46;
    }

    .carousel .carousel-status {
        display: none;
    }
`



