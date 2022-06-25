import { Snackbar, Typography } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import styled, { css } from "styled-components";
import { IoMdClose } from "react-icons/io";

interface AlertTypeProps {
  severity?: string;
  variant?: string;
  type?: "error" | "success" | "info" | "warning";
}

interface CloseIconProps {
  variant?: string;
  type?: string;
}

export const AlertContainer = styled(Snackbar)`
  &&& {
    background-color: transparent;
    margin-top: 1rem;
  }
`;

export const AlertType = styled(MuiAlert)<AlertTypeProps>`
  &&& {
    ${({ type }) => css`
      display: flex;
      align-items: center;
      height: 56px;
      width: 100%;
      background-color: ${() => {
        switch (type) {
          case "warning":
            return "yellow";
          case "error":
            return "red";
          case "info":
            return "blue";
          case "success":
            return "green";
        }
      }};
    `}
  }
`;

export const AlertMessage = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: 500;
`;

export const CloseIcon = styled(IoMdClose)<CloseIconProps>`
  &&& {
    ${({ variant, type }) => css`
      width: 1rem;
      height: 1rem;

      color: ${() => {
        if (variant === "filled") {
          return "#000";
        } else {
          switch (type) {
            case "warning":
              return "yellow";
            case "error":
              return "red";
            case "info":
              return "blue";
            case "success":
              return "green";
          }
        }
      }};
    `}
  }
`;
