import { Link } from 'react-router-dom';
import * as S from './styles';

export const Navbar = () => {
    return (
        <S.NavContainer>
            <div>
                <S.Container>
                    <Link to="/">
                        <li>
                            AAAAA
                        </li>
                    </Link>
                </S.Container>
            </div>
        </S.NavContainer>
    );
}