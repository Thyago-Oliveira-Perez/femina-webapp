import * as S from "./styles";
import { useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { Carousel } from "react-responsive-carousel";
import { ProductCardDetailed } from "../../components/ProductCardDetailed";

export function ProdutosFiltrados() {
  const produtos = [
    {
      id: 0o1,
      nome: "aaaaa",
      imagem:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      price: 100,
      destaque: false,
    },
    {
      id: 0o5,
      nome: "aaaaa",
      imagem:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      price: 100,
      destaque: false,
    },
    {
      id: 0o5,
      nome: "aaaaa",
      imagem:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      price: 100,
      destaque: false,
    },
    {
      id: 0o1,
      nome: "aaaaa",
      imagem:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      price: 100,
      destaque: false,
    },
    {
      id: 0o5,
      nome: "aaaaa",
      imagem:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      price: 100,
      destaque: false,
    },
    {
      id: 0o5,
      nome: "aaaaa",
      imagem:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      price: 100,
      destaque: false,
    },
     {
      id: 0o1,
      nome: "aaaaa",
      imagem:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      price: 100,
      destaque: false,
    },
    {
      id: 0o5,
      nome: "aaaaa",
      imagem:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      price: 100,
      destaque: false,
    },
    {
      id: 0o5,
      nome: "aaaaa",
      imagem:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      price: 100,
      destaque: false,
    },
    {
      id: 0o1,
      nome: "aaaaa",
      imagem:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      price: 100,
      destaque: false,
    },
    {
      id: 0o5,
      nome: "aaaaa",
      imagem:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      price: 100,
      destaque: false,
    },
    {
      id: 0o5,
      nome: "aaaaa",
      imagem:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      price: 100,
      destaque: false,
    },
    
  ];

  const [openAlert, setOpenAlert] = useState(true);

  return (
    <div>
        <S.StyledH3>Conjuntos |  Tipos |  Com Bojo </S.StyledH3>
        <S.ContainerGrid>
        <S.GridPorduct>
          {produtos.map(
            (produto) =>
              produto.destaque == false && (
                <ProductCard
                  nome={produto.nome}
                  destaque={produto.destaque}
                  imagemUrl={produto.imagem}
                  valor={produto.price}
                  key={produto.id}
                />
              )
          )}
        </S.GridPorduct>
      </S.ContainerGrid>
    </div>
  );
}
