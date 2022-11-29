import { useState, useContext } from 'react';
import * as S from './styles';
import { AiOutlineUser, AiOutlineUserAdd, AiOutlineLeft } from "react-icons/ai";
import {BsHeart} from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi'
import { IconButton, Menu, MenuItem } from '@mui/material';
import { AuthContext } from "../../context/AuthContext";
import Logo from '../../../public/logo.svg';
import {useLocation, useNavigate} from 'react-router-dom';
import isAuthenticated from '../../utils/isAuthenticated';

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

  const [openMenu, setOpenMenu] = useState(false);

  const { userInfo } = useContext(AuthContext);
  const signed = localStorage.getItem("user");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }

  const isAuthenticatedToken = isAuthenticated();

  return (
    <header>
      <S.HeaderContainer>
        {
          type == "global" && (

            <S.ItemsContainer>
              <S.LogoArea>

                <img src={Logo} alt="logo" />
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
              {isAuthenticatedToken ? <>
                <S.MenuArea>
                  <Menu
                    id="basic-menu"
                    open={openMenu}
                    onClose={() => setOpenMenu(false)}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                    anchorOrigin={{
                      vertical: 110,
                      horizontal: 1380,
                    }}
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                  >
                    <S.StyledMenu onClick={() => logout()}>
                      Sair
                      <FiLogOut color={'#7a0000'} />
                    </S.StyledMenu>
                  </Menu>
                  <S.ButtonArea>
                    <S.ButtonIcon>
                      <BsHeart size="16px" />
                      <S.StyledLink onClick={() => navigate('/favoritos')}>Favoritos</S.StyledLink>
                    </S.ButtonIcon>
                    <S.ButtonIcon>
                      <AiOutlineUser size="16px" />
                      <S.StyledLink onClick={() => setOpenMenu(true)}>Olá, {userInfo?.nome}</S.StyledLink>
                    </S.ButtonIcon>
                  </S.ButtonArea>
                  
                </S.MenuArea>


              </> :

                <S.ButtonArea>
                  <S.ButtonIcon>
                    <S.StyledLink onClick={() => navigate('/login')}>Login</S.StyledLink>
                    <AiOutlineUser size="16px" />
                  </S.ButtonIcon>

                  <S.ButtonIcon>
                    <S.StyledLink onClick={() => navigate('/usuario')}>Cadastre-se</S.StyledLink>
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