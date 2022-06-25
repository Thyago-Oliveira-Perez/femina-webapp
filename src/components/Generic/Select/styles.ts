import { InputLabel, MenuItem, Select } from '@mui/material';
import { setThemeColor } from '../../../utils/components/Generic';
import styled, { css } from 'styled-components';


export const SelectWrapper = styled(Select)`
  &&& {
    
      background: white;
      color: #9B4A46;
      font-size: 1.6rem;

      &::after {
        border-color: #9B4A46;
      }
    
  }
`;

interface InputLabelProps {
  themeColor: string;
  requiredType?: string | boolean;
}

export const SelectLabel = styled(InputLabel)<InputLabelProps>`
  &&& {
    ${({ requiredType }) => css`
      font-size: 1.2rem;
      margin-top: 0.3rem;

      &.MuiInputLabel-filled {
        color: #9B4A46;
      }

      &.MuiInputLabel-filled.Mui-focused {
        color: #9B4A46;
      }

      & .MuiInputLabel-asterisk {
        color: ${() => {
          if (requiredType) {
            switch (requiredType) {
              case 'obrigatório':
                return 'red';
              case 'requerido':
                return '#c2c2c2';
              default:
                return '#c2c2c2';
            }
          }
        }};
      }
    `}
  }
`;

export const Option = styled(MenuItem)`
  &&& {
    font-size: 1.6rem;
  }
`;
