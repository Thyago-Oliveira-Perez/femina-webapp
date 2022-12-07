import * as S from './styles';
import React, { useEffect, useState } from 'react';
import { FavoritosCard } from '../../components/FavoritosCard';
import { CarouselComponent } from '../../components/Carousel';
import Carousel from 'react-material-ui-carousel';
import FavoritosApi from '../../api/Favoritos.api';
import { IFavoritosGet } from '../../types/favoritos.types';
import { Alert } from '../../components/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { EmptyView } from '../../components/EmptyView';


export function Favoritos() {

    const favoritosApi = new FavoritosApi();

    const [favoritos, setFavoritos] = useState<IFavoritosGet>();
    const [openAlertWarn, setOpenAlertWarn] = useState(false);
    const [openAlertSucess, setOpenAlertSucess] = useState(false);
    const [showLoad, setShowLoad] = useState(true);

    const getFavoritos = () => {
        favoritosApi.getFavoritos().then((response: any) => {
            setFavoritos(response.data)
            setShowLoad(false)
        }).catch((error) => {
            console.log(error);
        })
    }
   

    const deleteFavoritos = (idUser: any, idProduto: any) => {
        favoritosApi.deleteFavorito({ idUser, idProduto }).then((response) => {

            getFavoritos()
            setOpenAlertSucess(true)

        }).catch((error) => {
            console.log(error);
            setOpenAlertWarn(true)
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

               

                {showLoad ? <S.ProgressContainer>
                    <CircularProgress style={{ color: '#7A0000' }} />
                </S.ProgressContainer> : <div>
                    {favoritos?.content?.length != 0 ?

                        <div>
                            {favoritos?.content?.map(
                                (favorito) => (
                                    <FavoritosCard
                                        id={favorito.id}
                                        nome={favorito.produto.nome}
                                        valor={favorito.produto.valor}
                                        descricao={favorito.produto.descricao}
                                        image={favorito.produto.imagem}
                                        clickButton={() => deleteFavoritos(favorito.usuario.id, favorito.produto.id)}
                                    />
                                )
                            )}
                        </div>
                        :

                        <EmptyView message='Sua lista de desejos está fazia :)' />
                    }


                </div>}





                <Carousel />

            </S.SubContainer>

            <Alert
                alertStatus={openAlertWarn}
                setAlertStatus={setOpenAlertWarn}
                message={"Erro ao deletar"}
                type="warning"
            />

            <Alert
                alertStatus={openAlertSucess}
                setAlertStatus={setOpenAlertSucess}
                message={"Sucesso ao deletar favorito"}
                type="success"
            />
              {/* <Alert
                alertStatus={openAlertSucess}
                setAlertStatus={setOpenAlertSucess}
                message={"Sucesso ao favoritar"}
                type="success"
            /> */}
        </S.Container>


    )
}