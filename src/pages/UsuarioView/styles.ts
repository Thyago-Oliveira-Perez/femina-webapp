import { Radio, FormLabel, FormControlLabel } from '@mui/material';
import styled, {css} from 'styled-components';

interface ContainerProps {
    required?: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
`;


export const FormContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
    margin: 2rem 0;

    p {
        color: rgba(0, 0, 0, 0.6);
    }
`;

export const DateForm = styled.div`
    display: flex;
    gap: 2rem;
`;

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0;

    a {
        text-decoration: none;
        color: #9B4A46;

        &:hover {
            text-decoration-line: underline;
        }
    }

    p { 
        color: rgba(0, 0, 0, 0.6);
    }
`;

export const StyledRadio = styled(Radio)`
  &&& {
    color: #7A0000;
    
    ${({ disabled }) => css`
      color: ${disabled
        ? '#c2c2c2' : '#7A0000'};
        
      & .mui-checked: {
        color: '#c2c2c2';
      }
      & .MuiSvgIcon-root {
        font-size: 1.3rem;
      }
    `}
  }
`;

export const StyledFormLabel = styled(FormLabel)<ContainerProps>`
  &&& {
    ${({ required }) => css`
      & .MuiFormControlLabel-label {
        font-size: 1rem;
        min-width: max-content;
        color:  rgba(0, 0, 0, 0.6);
        flex-wrap: wrap;
        
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

export const StyledLabel = styled(FormControlLabel)`
  color:rgba(0, 0, 0, 0.6);
`

export const StyledLinkContainer = styled.div`

  padding-top: 20px;
  padding-left: 20px;
`;
