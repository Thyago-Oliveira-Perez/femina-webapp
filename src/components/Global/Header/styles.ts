import styled from 'styled-components'
import TextField from "@mui/material/TextField";

export const HeaderContainer = styled.div`
    display: flex;
    background-color: #9B4A46;
    width: 100%;
    height: 5rem;
    align-items: center;
    justify-content: space-around;
`;

export const StyledTextField = styled(TextField)`
  &&& {
   
      width: 100%;

      & .MuiInputLabel-root {
        color: white;
        font-size: 1.4rem;
      }


      & .MuiFilledInput-root {
        font-size: 1.6rem;
        color: white;

        &::after {
          border-color: red;
        }
      }

      & .MuiInputLabel-asterisk {
        color: red;
      }

      & .MuiFormHelperText-root {
        color: white;
        /* font-size: 1.4rem; */
        margin-right: auto;
      }
  }
`;

export const ButtonArea = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;

    a:hover {
        color: #7A0000;
        transition: .2s;
    }
`;

export const ButtonIcon = styled.div`
    display: flex;
    gap: .7rem;
    align-items: center;
`;

export const StyledLink = styled.a`
    text-decoration: none;
    color: white;
    font-size:1.1rem;
    font-family: Poppins;
`;
