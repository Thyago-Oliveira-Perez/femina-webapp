import * as S from './styles';
import React from 'react';
import { FavoritosCard } from '../../components/FavoritosCard';
import { CarouselComponent } from '../../components/Carousel';
import Carousel from 'react-material-ui-carousel';


export function Favoritos() {

    const produtos = [
        {
            id: 0o1,
            nome: "oitra caois",
            imagem:
                "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
            price: 100,
            destaque: false,
            descricao: "Lorem ipsum scelerisque inceptos donec ",
        },
        {
            id: 0o5,
            nome: "aaaaa",
            imagem:
                "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
            price: 100,
            destaque: false,
            descricao: "Lorem ipsum scelerisque inceptos donec ",
        },
        {
            id: 0o5,
            nome: "aaaaa",
            imagem:
                "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
            price: 100,
            destaque: false,
            descricao: "Lorem ipsum scelerisque inceptos donec ",
        },
        {
            id: 0o1,
            nome: "aaaaa",
            imagem:
                "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
            price: 100,
            destaque: false,
            descricao: "Lorem ipsum scelerisque inceptos donec ",
        },
        {
            id: 0o5,
            nome: "aaaaa",
            imagem:
                "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
            price: 100,
            destaque: false,
            descricao: "Lorem ipsum scelerisque inceptos donec ",
        },
        {
            id: 0o5,
            nome: "aaaaa",
            imagem:
                "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
            price: 100,
            destaque: false,
            descricao: "Lorem ipsum scelerisque inceptos donec ",
        },
    ];


    return (
        <S.Container>
            <S.SubContainer>

                <S.Title>
                    <h2>Sua Lista de Desejos</h2>
                </S.Title>
                
                {produtos.map(
                    (produto) => (
                        <FavoritosCard
                            id={produto.id}
                            nome={produto.nome}
                            valor={produto.price}
                            descricao={produto.descricao}
                            image={produto.imagem}
                        />
                    )
                )}

                <Carousel />


            </S.SubContainer>
        </S.Container>


    )
}