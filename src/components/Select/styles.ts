import { InputLabel, MenuItem, Select } from "@mui/material";
import styled, { css } from "styled-components";

interface InputLabelProps {
  themeColor: string;
  requiredType?: string | boolean;
}

export const SelectWrapper = styled(Select)`
  &&& {
    background: white;
    color: #9b4a46;
    font-size: 1rem;
    &::after {
      border-color: #9b4a46;
      font-size: 1rem;
      
    }
  }
`;

export const SelectLabel = styled(InputLabel)<InputLabelProps>`
  &&& {
    ${({ requiredType }) => css`
      
      margin-top: 0.3rem;
     
      &.MuiInputLabel-filled.Mui-focused {
        color: #9b4a46;
      }
      & .MuiInputLabel-asterisk {
        color: ${() => {
          if (requiredType) {
            switch (requiredType) {
              case "obrigatório":
                return "red";
              case "requerido":
                return "#c2c2c2";
              default:
                return "#c2c2c2";
            }
          }
        }};
      }
    `}
  }
`;

export const Option = styled(MenuItem)`
  &&& {
    font-size: .9rem;
  
  }
`;