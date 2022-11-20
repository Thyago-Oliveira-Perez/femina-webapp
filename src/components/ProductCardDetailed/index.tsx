import * as S from './styles';
import { ProductCardProps } from './ProductCard.types';
import { useState, MouseEventHandler } from 'react';
import { CarouselSmaller } from "../CarouselSmaller";

export const ProductCardDetailed = ({ image, price, name, destaque, descricao,  onClickButton }: ProductCardProps) => {
    const [show, setShow] = useState(false);
    const handleMouseOver = () => {
        setShow(true);
    };
    const handleMouseOut = () => {
        setShow(false);
    };
    return (
        <S.ContainerItem>
            <div>
            <CarouselSmaller  />
            </div>
            <S.StyledInfo>
                <S.StyledName>{name}</S.StyledName>
                <S.StyledPrice>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</S.StyledPrice>
                <S.StyledDescription>{descricao}</S.StyledDescription>
            </S.StyledInfo>
        </S.ContainerItem>
    );
}