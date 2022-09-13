import { useState } from 'react';
import * as S from './styles';
import { AiOutlineUser, AiOutlineUserAdd, AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    return(
        <header>
      <S.HeaderContainer>
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

          <S.ButtonArea> 
            <S.ButtonIcon>
              <S.StyledLink href="#" >Login</S.StyledLink>
              <AiOutlineUser size="16px" />
            </S.ButtonIcon>

            <S.ButtonIcon>
              <S.StyledLink href="#">Cadastre-se</S.StyledLink>
              <AiOutlineUserAdd size="16px" />
            </S.ButtonIcon>
          </S.ButtonArea>
        </S.ItemsContainer>
      </S.HeaderContainer>
    </header>
    );
}