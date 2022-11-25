import * as S from './styles';
import { ProductCardProps } from './ProductCard.types';
import { useState, MouseEventHandler, useContext } from 'react';
import { CarouselSmaller } from "../CarouselSmaller";
import { ProdutoEntity } from '../../types/product.types';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import IconButton from '@mui/material/IconButton';
import FavoritosApi from '../../api/Favoritos.api';
import {AuthContext} from '../../context/AuthContext';


export const ProductCardDetailed = ({ imagemUrl, valor, nome, destaque, descricao, id }: ProdutoEntity) => {
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

    const postFavoritos = (id: number) => {

        const modelFavoritos = {
            idUser: userInfo?.id as number,
            idProduto: id
        }

        favoritosApi.postFavoritos(modelFavoritos).then((response: any) => {
            console.log(response.data)
            setFavorite(true)
            console.log('favoritado!!')
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <S.ContainerItem>
            <div style = {{width : '40%'}}>
            <CarouselSmaller  />
            </div>
            <S.StyledInfo>
                <S.StyledName>
                    {nome}
                    <IconButton onClick={() => postFavoritos(id as number)}>
                        {
                            favorite ?
                            <AiOutlineHeart size={30} color={'white'}/>
                            : <AiFillHeart size={30} color={'white'}/>
                        }
                    </IconButton>
                </S.StyledName>
                <S.StyledPrice>{valor ? valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : 0}</S.StyledPrice>
                <S.StyledHr />
                <S.StyledDescription>{descricao}</S.StyledDescription>
            </S.StyledInfo>
        </S.ContainerItem>
    );
}