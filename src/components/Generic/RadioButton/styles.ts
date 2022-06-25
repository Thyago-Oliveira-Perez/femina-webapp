import styled, { css } from 'styled-components';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

interface ContainerProps {
  required?: boolean;
  fontWeight?: string;
}

export const StyledRadio = styled(Radio)`
  &&& {
    color: #7A0000;
    margin-left: 1rem;
    ${({ disabled }) => css`
      color: ${disabled
        ? '#c2c2c2' : '#7A0000'};
        
      & .mui-checked: {
        color: '#c2c2c2';
      }

      & .MuiSvgIcon-root {
        font-size: 1.5rem;
      }
    `}
  }
`;

export const Container = styled(FormControlLabel)<ContainerProps>`
  &&& {
    ${({ required, fontWeight = 'bold' }) => css`
      & .MuiFormControlLabel-label {
        font-size: 1.3rem;
        min-width: max-content;
        color:  rgba(0, 0, 0, 0.6);
        flex-wrap: wrap;
        font-weight: ${() => {
          switch (fontWeight) {
            case 'bold':
              return '500';
            case 'light':
              return '400';
          }
        }};
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
