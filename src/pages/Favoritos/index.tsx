import * as S from './styles';
import React, { useEffect, useState } from 'react';
import { FavoritosCard } from '../../components/FavoritosCard';
import { CarouselComponent } from '../../components/Carousel';
import Carousel from 'react-material-ui-carousel';
import FavoritosApi from '../../api/Favoritos.api';
import { IFavoritosGet } from '../../types/favoritos.types';


export function Favoritos() {

    const favoritosApi = new FavoritosApi();

    const [favoritos, setFavoritos] = useState<IFavoritosGet>();

    const getFavoritos = () => {
        favoritosApi.getFavoritos().then((response: any) => {
            setFavoritos(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleFavoritos = (idUser: any, idProduto: any) => {
        favoritosApi.postFavoritos({idUser, idProduto}).then((response) => {
            console.log('aaaa')
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getFavoritos();
    }, [])


    return (
        <S.Container>
            <S.SubContainer>

                <S.Title>
                    <h2>Sua Lista de Desejos</h2>
                </S.Title>
                
                {favoritos?.content?.map(
                    (favorito) => (
                        <FavoritosCard
                            id={favorito.id}
                            nome={favorito.produto.nome}
                            valor={favorito.produto.valor}
                            descricao={favorito.produto.descricao}
                            image={favorito.produto.imagem}
                            clickButton={() => handleFavoritos(favorito.usuario.id, favorito.produto.id)}
                        />
                    )
                )}

                <Carousel />


            </S.SubContainer>
        </S.Container>


    )
}