import { MouseEventHandler } from "react";
import * as S from "./styles";

interface ProdutoProps {
  productPhoto?: string;
  productPhotoDescription?: string;
  name?: string;
  price?: number;
}

export const CardProduct = ({
  productPhoto,
  name,
  price,
  productPhotoDescription,
}: ProdutoProps) => {
  return (
    <S.Container>
      <img src={productPhoto} alt={productPhotoDescription} />
      <h2>{name}</h2>
      <p>
        {price?.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </p>
    </S.Container>
  );
};
