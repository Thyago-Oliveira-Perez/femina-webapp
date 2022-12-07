import styled from 'styled-components';

import { MenuItem, TextField } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "@mui/material";
import { Link as LinkRouter } from 'react-router-dom'

export const HeaderContainer = styled.div`
  background-color: #9b4a46;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
`;

export const ItemsContainer = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoArea = styled.a`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

export const StyledDrawer = styled(Drawer)`
 & .MuiDrawer-paper {
    background-color: #d4a9a7;
    width: 70%;
    padding: 2rem 3rem;
    @media (min-width: 1024px) {
      padding: 2rem 0;
      width: 20%;
    }
  }
`;

export const StyledListButton = styled(ListItemButton)`
  &&& {
    padding: 1.4rem 2rem;
  }
`;

export const StyledLinkDrawer = styled(Link)`
  &&& {
    color: white;
    font-size: 1.1rem;
    font-family: Roboto;
    text-decoration: none;
  }
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
    color: #7a0000;
    transition: 0.2s;
  }
`;

export const ButtonIcon = styled.div`
 display: flex;
  gap: 0.7rem;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #7a0000;
    a {
      color: #7a0000;
    }
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-family: Poppins;
`;

export const GenericHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledMenu = styled(MenuItem)`
&&& {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

`;

export const MenuArea = styled.div`
  display: flex;
  flex-direction: column;
`;




