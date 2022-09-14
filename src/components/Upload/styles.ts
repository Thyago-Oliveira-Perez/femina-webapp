import styled, { css } from "styled-components";
import { FaUpload } from "react-icons/fa";
import { VscTrash, VscFilePdf } from "react-icons/vsc";

import { Box, Card, List, Typography } from "@mui/material";

interface UploadProps {
  height: number;
  width: number | string;
}

export const StyledBoxContainer = styled(Box)<UploadProps>`
  &&& {
    ${({ height, width }) => css`
      width: ${width};
      height: ${height};
      margin: 1rem auto;
      background-color: white;
      border: 1px dashed #c2c2c2;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}
  }
`;

export const StyledTypographyContainer = styled(Typography)`
  &&& {
    font-family: "Roboto";
    font-size: 16px;
    line-height: 24px;
    color: #9b4a46;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const StyledIconContainer = styled(FaUpload)`
  &&& {
    color: #9b4a46;
    font-size: 2.4rem;
  }
`;

export const StyledBoxCardContainer = styled(Box)`
  &&& {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledList = styled(List)`
  &&& {
    width: 100%;
    height: 100%;
  }
`;

export const StyledCard = styled(Card)`
  &&& {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    border: 1px solid #c2c2c2;
  }
`;

export const StyledBoxPreview = styled(Box)`
  &&& {
    display: flex;
    gap: 1rem;
    width: 100%;
    margin-left: 2%;
  }
`;

export const StyledDocumentIcon = styled(VscFilePdf)`
  font-size: 3rem;
  color: #7a0000;
`;

export const StyledTypographyName = styled(Typography)`
  &&& {
    color: #9b4a46;
    text-decoration: underline;
    font-size: 14px;
  }
`;
interface StyledTypographyTitle {
  required?: string | boolean;
}

export const StyledTypographyTitle = styled(Typography)<StyledTypographyTitle>`
  &&& {
    ${({ required }) => css`
      color: grey;
      font-size: 14px;
      margin-left: 1rem;
      ${() =>
        required &&
        css`
          &::after {
            content: " *";
            color: ${() => {
              switch (required) {
                case "obrigatório":
                  return "red";
                case "requerido":
                  return "black";
              }
            }};
          }
        `}
    `}
  }
`;

export const StyledTypographySize = styled(Typography)`
  &&& {
    ${({ theme }) => css`
      color: grey;
      font-size: 14px;
      margin-left: 1rem;
    `}
  }
`;

export const StyledBoxIcon = styled(Box)`
  &&& {
    justify-content: center;
    display: flex;
    align-items: center;
    padding-bottom: 6.5%;
  }
`;

export const StyledTrashIcon = styled(VscTrash)`
  &&& {
    color: grey;
    font-size: 20px;
  }
`;