import { MouseEventHandler } from 'react';

export interface ProductCardProps {
    image: string;
    price: number;
    name: string;
    destaque: boolean;
    onClickButton?: MouseEventHandler<HTMLButtonElement> | undefined;

}