import styled, { css } from "styled-components";
import { Checkbox, FormControlLabel } from "@mui/material";

interface StyledCheckboxProps {
  disabled?: boolean;
}

interface ContainerProps {
  required?: boolean;
}

export const StyledCheckbox = styled(Checkbox)<StyledCheckboxProps>`
  &&& {
    color: #7a0000;

    & .MuiSvgIcon-root {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const Container = styled(FormControlLabel)<ContainerProps>`
  &&& {
    ${({ required }) => css`
      & .MuiTypography-root {
        font-size: 1.2rem;
        color:  rgba(0, 0, 0, 0.6);
        min-width: max-content;
        flex-wrap: wrap;
        font-weight: 500;
        word-wrap: break-word;
      }
      ${() =>
        required &&
        `&::after {
          content: '*';
          position: relative;
          left: 0.5rem;
          color: red;
        }`}
    `}
  }
`;
