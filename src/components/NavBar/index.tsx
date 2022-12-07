import { Link, useNavigate } from 'react-router-dom';
import * as S from './styles';
import CategoriasApi from '../../api/Categorias.api';
import { useEffect, useState } from 'react';
import { ICategoria } from '../../types/categorias.types';

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

    const navigate = useNavigate()

    const [categorias, setCategorias] = useState<ICategoria>()
    const categoriasApi = new CategoriasApi();

    const getCategorias = () => {
        categoriasApi.getCategorias().then((response: any) => {
            setCategorias(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getCategorias();
    }, [])

    return (
        <S.NavContainer>
            <div>
                <S.Container>
                    {categorias?.content?.map((nav) => (
                        <S.StyledLink key={nav.id} onClick={() => navigate(`/produtos/${nav.nome}/${nav.id}`)}>
                            <li>
                                {nav.nome}
                            </li>
                        </S.StyledLink>
                    ))}
                </S.Container>
            </div>
        </S.NavContainer>
    );
}