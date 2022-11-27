import * as S from './styles';
import { useState, MouseEventHandler, useContext } from 'react';
import { ProdutoEntity } from '../../types/product.types';
import FavoritosApi from '../../api/Favoritos.api';
import IconButton from '@mui/material/IconButton';
import {AuthContext} from '../../context/AuthContext';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { StyledBoxCardContainer } from '../Upload/styles';
import { StyledImagem } from '../Carousel/styles';


export const FavoritosCard =  () => {

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

   

    return(
        <div>
        <S.Container>
            <S.ModalContent>
            <S.ContainerItem>
            <div style = {{width : '40%'}}>

            </div>
            <S.StyledInfo>
                
                <S.StyledName>
                    Conjunto Olinda
                </S.StyledName>
                <S.StyledPrice>
                    R$ 99,99
                </S.StyledPrice>
                <S.StyledHr />
                <S.StyledDescription>
                    Lorem ipsum scelerisque inceptos donec 
                </S.StyledDescription>
            </S.StyledInfo>
        </S.ContainerItem>
            </S.ModalContent>
        </S.Container>


    </div>

    )
}