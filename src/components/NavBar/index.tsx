import { Link } from 'react-router-dom';
import * as S from './styles';

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

export const Navbar = () => {
    return (
        <S.NavContainer>
            <div>
                <S.Container>
                    {NavObj.map((nav) => (
                        <S.StyledLink key={nav.id} to={`/produtos/${nav.name}`}>
                            <li>
                                {nav.name}
                            </li>
                        </S.StyledLink>
                    ))}
                </S.Container>
            </div>
        </S.NavContainer>
    );
}