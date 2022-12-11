import * as S from './styles';
import { ProductCardProps } from './ProductCard.types';
import { useState, MouseEventHandler, useContext } from 'react';
import { CarouselSmaller } from "./CarouselSmaller";
import { ProdutoEntity } from '../../types/product.types';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import IconButton from '@mui/material/IconButton';
import FavoritosApi from '../../api/Favoritos.api';
import {AuthContext} from '../../context/AuthContext';
import {Alert} from '../Alert';

interface ImageProps {
    imagesArray: any[];
    valor: number;
    nome: string;
    descricao: string;
    id: string;
}

export const ProductCardDetailed = ({  valor, nome, descricao, id, imagesArray }: ImageProps) => {

    const [show, setShow] = useState(false);
    const [alertObj, setAlertObj] = useState({
        type: "success",
        message: ""
    })

    const [showAlertSucess, setShowAlertSucess] = useState(false)
    const [showAlertWarn, setShowAlertWarn] = useState(false)
    const handleMouseOver = () => {
        setShow(true);
    };
    const handleMouseOut = () => {
        setShow(false);
    };
    
    const { userInfo } = useContext(AuthContext);
    const favoritosApi = new FavoritosApi();

    const [favorite, setFavorite] = useState(false)

    const postFavoritos = (id: string) => {

        const modelFavoritos = {
            idUser: userInfo?.id as string,
            idProduto: id
        }

        favoritosApi.postFavoritos(modelFavoritos).then((response: any) => {
            console.log(response.data)
            setFavorite(true);
            setShowAlertSucess(true),
            setAlertObj({message: "Favoritado com sucesso", type: "success"})
        }).catch((error) => {
            console.log(error)
            setShowAlertWarn(true),
            setAlertObj({message: "Produto ja foi favoritado", type: "warning"})
        })
    }

    return (
        <S.ContainerItem>
            <div style = {{width : '40%'}}>
            <CarouselSmaller images={imagesArray}  />
            </div>
            <S.StyledInfo>
                <S.StyledName>
                    {nome}
                    <IconButton onClick={() => postFavoritos(id as string)}>
                        {
                            favorite ?
                            <AiFillHeart size={30} color={'white'}/>
                            : <AiOutlineHeart size={30} color={'white'}/>
                        }
                    </IconButton>
                </S.StyledName>
                <S.StyledPrice>{valor ? valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : 0}</S.StyledPrice>
                <S.StyledHr />
                <S.StyledDescription>{descricao}</S.StyledDescription>
            </S.StyledInfo>

            <Alert
                alertStatus={showAlertSucess}
                setAlertStatus={setShowAlertSucess}
                message={alertObj.message}
                type={alertObj.type}
            />

            <Alert
                alertStatus={showAlertWarn}
                setAlertStatus={setShowAlertWarn}
                message={alertObj.message}
                type={alertObj.type}
            />
        </S.ContainerItem>
    );
}