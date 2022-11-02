import { useState, useContext } from 'react';
import * as S from './styles';
import { AiOutlineUser, AiOutlineUserAdd, AiOutlineLeft } from "react-icons/ai";
import { IconButton } from '@mui/material';
import { AuthContext } from "../../context/AuthContext";

interface HeaderProps {
  type: "generic" | "global";
}

export const NavObj = [
  {
    id: 0o1,
    path: '/',
    name: "Calcinhas",
  },
  {
    id: 0o2,
    path: '/',
    name: "Cuecas",
  },
  {
    id: 0o3,
    path: '/',
    name: "Sutiã",
  },
  {
    id: 0o4,
    path: '/',
    name: "Pijamas",
  },
  {
    id: 0o5,
    path: '/',
    name: "Conjuntos",
  },
]

export const Header = ({ type }: HeaderProps) => {
  const { userInfo } = useContext(AuthContext);
  const signed = localStorage.getItem("user");
  console.log('header ->',userInfo)
  return (
    <header>
      <S.HeaderContainer>
        {
          type == "global" && (

            <S.ItemsContainer>
              <S.LogoArea>

                <img src="logo.svg" alt="logo" />
              </S.LogoArea>



              {/* <div>
    <S.StyledTextField
      variant="standard"
      placeholder="O que deseja?"
      InputProps={{
        endAdornment: <InputAdornment position="end">checked</InputAdornment>,
      }}
    />
  </div> */}
              {signed ? <>
                <p>Olá, {userInfo?.nome}</p>
              </> :

                <S.ButtonArea>
                  <S.ButtonIcon>
                    <S.StyledLink href="#">Login</S.StyledLink>
                    <AiOutlineUser size="16px" />
                  </S.ButtonIcon>

                  <S.ButtonIcon>
                    <S.StyledLink href="#">Cadastre-se</S.StyledLink>
                    <AiOutlineUserAdd size="16px" />
                  </S.ButtonIcon>
                </S.ButtonArea>
              }

            </S.ItemsContainer>
          )
        }
        {
          type == "generic" && (
            <S.GenericHeaderContainer>
              <IconButton>
                <AiOutlineLeft color="#fff" />
              </IconButton>
              <S.LogoArea>

                <img src="logo.svg" alt="logo" />
              </S.LogoArea>

            </S.GenericHeaderContainer>

          )
        }

      </S.HeaderContainer>
    </header>
  );
}