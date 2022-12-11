import * as S from './styles';
import { ProductCardProps } from './ProductCard.types';
import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FavoritosApi from '../../api/Favoritos.api';
import {AuthContext} from '../../context/AuthContext';
import { Alert } from '../Alert';

export const ProductCard = ({ image, price, name, destaque, id }: ProductCardProps) => {
    const navigate = useNavigate();

    const [alertObj, setAlertObj] = useState({
        type: "success",
        message: ""
    })

    const [showAlertSucess, setShowAlertSucess] = useState(false)
    const [showAlertWarn, setShowAlertWarn] = useState(false)

    const favoritosApi = new FavoritosApi();
    const {userInfo} = useContext(AuthContext)

    const [show, setShow] = useState(false);

    const postFavoritos = (idUser: string, idProduto: string) => {
        favoritosApi.postFavoritos({idUser, idProduto}).then((response) => {
            console.log(response)
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
            
            <S.StyledButtonArea>
                <button onClick={() => navigate(`/produto/${id}`)}>Detalhar</button>
                <button onClick={() => postFavoritos(userInfo?.id.toString() as string, id)}>Favoritar</button>

            </S.StyledButtonArea>
            
            <S.StyledImg src={image} alt="" />
            <S.StyledInfo destaque={destaque}>
                <S.StyledName>{name}</S.StyledName>
                <S.StyledPrice>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</S.StyledPrice>
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