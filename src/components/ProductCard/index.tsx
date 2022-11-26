import * as S from './styles';
import { ProductCardProps } from './ProductCard.types';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const ProductCard = ({ image, price, name, destaque, id }: ProductCardProps) => {
    const navigate = useNavigate()

    const [show, setShow] = useState(false);
   
    return (
        <S.ContainerItem>
            
            <S.StyledButtonArea>
                <button onClick={() => navigate(`/produto/${id}`)}>Detalhar</button>
            </S.StyledButtonArea>
            
            <S.StyledImg src={image} alt="" />
            <S.StyledInfo destaque={destaque}>
                <S.StyledName>{name}</S.StyledName>
                <S.StyledPrice>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</S.StyledPrice>
            </S.StyledInfo>
        </S.ContainerItem>
    );
}