import * as S from "./styles";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Link from "@mui/material/Link";

export const Header = () => {
  return (
    <header>
      <S.HeaderContainer>
        <div>
          <img src="../../../public/logoProvisoria.png" alt="logo" />
        </div>

        {/* <div>
          <S.StyledTextField
            variant="standard"
            placeholder="O que deseja?"
            InputProps={{
              endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,
            }}
          />
        </div> */}

        <S.ButtonArea>

          <S.ButtonIcon>
            <S.StyledLink href="#">Login</S.StyledLink>
            <PersonIcon sx={{ color: "white" }} />
          </S.ButtonIcon>

          <S.ButtonIcon>
            <S.StyledLink href="#">Cadastre-se</S.StyledLink>
            <PersonAddAlt1Icon sx={{ color: "white" }} />
          </S.ButtonIcon>

        </S.ButtonArea>
      </S.HeaderContainer>
    </header>
  );
};
