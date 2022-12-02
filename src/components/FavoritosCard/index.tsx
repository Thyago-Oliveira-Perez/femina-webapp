import * as S from './styles';
import { useState, MouseEventHandler, useContext } from 'react';
import { ProdutoEntity } from '../../types/product.types';
import FavoritosApi from '../../api/Favoritos.api';
import IconButton from '@mui/material/IconButton';
import { AuthContext } from '../../context/AuthContext';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { StyledBoxCardContainer } from '../Upload/styles';
import { StyledImagem } from '../Carousel/styles';

interface FavoritosCard {
    id: number;
    nome: string;
    valor: number;
    descricao: string;
    image: string;
    clickButton: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const FavoritosCard = ({ id, nome, valor, descricao, image, clickButton }: FavoritosCard) => {

    const [show, setShow] = useState(false);
    const handleMouseOver = () => {
        setShow(true);
    };
    const handleMouseOut = () => {
        setShow(false);
    };

    const { userInfo } = useContext(AuthContext);
    const favoritosApi = new FavoritosApi();

    const [favorite, setFavorite] = useState(false)



    return (
        <div>
            <S.Container>
                <S.ModalContent>
                    <S.ContainerItem>
                        <S.InfoContainer>
                            <S.ImgContainer>
                                <S.StyledImg src={image} alt="" />
                            </S.ImgContainer>
                            <S.StyledInfo>

                                <S.StyledName>
                                    {nome}
                                </S.StyledName>

                                <S.StyledPrice>
                                    {valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                </S.StyledPrice>

                                <S.StyledHr />

                                <S.StyledDescription>
                                    {descricao}
                                </S.StyledDescription>

                            </S.StyledInfo>
                        </S.InfoContainer>

                        <S.ButtonArea>
                            <IconButton onClick={clickButton}>
                                <AiFillHeart color='white'/>
                            </IconButton>
                        </S.ButtonArea>
                    </S.ContainerItem>


                </S.ModalContent>
            </S.Container>


        </div>

    )
}