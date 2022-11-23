import * as S from './styles';
import { ProductCardProps } from './ProductCard.types';
import { useState, MouseEventHandler } from 'react';
import { CarouselSmaller } from "../CarouselSmaller";
import { ProdutoEntity } from '../../types/product.types';

export const ProductCardDetailed = ({ imagemUrl, valor, nome, destaque, descricao }: ProdutoEntity) => {
    const [show, setShow] = useState(false);
    const handleMouseOver = () => {
        setShow(true);
    };
    const handleMouseOut = () => {
        setShow(false);
    };
    return (
        <S.ContainerItem>
            <div style = {{width : '40%'}}>
            <CarouselSmaller  />
            </div>
            <S.StyledInfo>
                <S.StyledName>{nome}</S.StyledName>
                <S.StyledPrice>{valor ? valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : 0}</S.StyledPrice>
                <S.StyledDescription>{descricao}</S.StyledDescription>
            </S.StyledInfo>
        </S.ContainerItem>
    );
}