import styled from 'styled-components';

import { TextField } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "@mui/material";

export const HeaderContainer = styled.div`
  background-color: #9b4a46;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
`;

export const ItemsContainer = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoArea = styled.div`
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
  font-size: 1.1rem;
  font-family: Roboto;
`;