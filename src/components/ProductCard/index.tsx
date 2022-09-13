import * as S from './styles';
import { ProductCardProps } from './ProductCard.types';
import { useState, MouseEventHandler } from 'react';

export const ProductCard = ({ image, price, name, destaque, onClickButton }: ProductCardProps) => {
    const [show, setShow] = useState(false);
    const handleMouseOver = () => {
        setShow(true);
    };
    const handleMouseOut = () => {
        setShow(false);
    };
    return (
        <S.ContainerItem onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            
            <S.StyledImg src={image} alt="" />

            <S.StyledInfo destaque={destaque}>
                <S.StyledName>{name}</S.StyledName>
                <S.StyledPrice>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</S.StyledPrice>
            </S.StyledInfo>
        </S.ContainerItem>
    );
}