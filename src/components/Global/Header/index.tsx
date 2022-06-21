import * as S from './styles';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';


export const Header = () => {
    return (
        <header>
            <S.HeaderContainer>
                <div>
                    <img src="../../../public/logoProvisoria.png" alt="logo" />
                </div>

                <div>
                <TextField placeholder="O que deseja?"/>
                
                </div>

                <div>
                    <button>
                        <a href="#">Login</a>
                    </button>
                    
                    <button>
                        <a href="#">Inscreva-se</a>
                    </button>
                </div>
            </S.HeaderContainer>
        </header>
    )
}