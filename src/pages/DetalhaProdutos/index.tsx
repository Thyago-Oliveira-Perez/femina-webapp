import * as S from "./styles";
import { useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { Carousel } from "react-responsive-carousel";
import { ProductCardDetailed } from "../../components/ProductCardDetailed";

export function DetalhaProdutos() {
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
  ];
  const ProdutosSemelhantes = [
    {
      id: 0o1,
      nome: "aaaaa",
      imagem:
        "https://img.elo7.com.br/product/zoom/309ADB7/conjunto-pijama-de-cetim-dia-da-noiva.jpg",
      price: 100,
      destaque: false,
    },
    {
      id: 0o5,
      nome: "aaaaa",
      imagem:
        "https://img.elo7.com.br/product/zoom/309ADB7/conjunto-pijama-de-cetim-dia-da-noiva.jpg",
      price: 100,
      destaque: false,
    },
    {
      id: 0o5,
      nome: "aaaaa",
      imagem:
        "https://img.elo7.com.br/product/zoom/309ADB7/conjunto-pijama-de-cetim-dia-da-noiva.jpg",
      price: 100,
      destaque: false,
    },
  ];

  const ProdutoSelecionado = [
    {
      id: 0o5,
      nome: "Conjunto Olinda",
      imagem:
        "https://img.elo7.com.br/product/zoom/309ADB7/conjunto-pijama-de-cetim-dia-da-noiva.jpg",
      price: 99.99,
      destaque: false,
      descricao: "Lorem ipsum dolor sit amet. Non ullam magnam At adipisci expedita non saepe voluptatem. Et enim quis aut consequatur eligendi sit laudantium quia sed eveniet repellat."
    },
  ];

  const [openAlert, setOpenAlert] = useState(true);

  return (
    <div>

      <S.ProductContainer>
          {ProdutoSelecionado.map(
            (ProdutoSelecionado) =>
            ProdutoSelecionado.destaque == false && (
                <ProductCardDetailed
                  name={ProdutoSelecionado.nome}
                  destaque={ProdutoSelecionado.destaque}
                  image={ProdutoSelecionado.imagem}
                  price={ProdutoSelecionado.price}
                  key={ProdutoSelecionado.id}
                  descricao= {ProdutoSelecionado.descricao}
                />
              )
          )}
        </S.ProductContainer>

      <S.ContainerGrid>
        <S.StyledH3>Produtos Semelhantes</S.StyledH3>
        <S.ProductContainer>
          {ProdutosSemelhantes.map(
            (ProdutosSemelhantes) =>
              ProdutosSemelhantes.destaque == false && (
                <ProductCard
                  name={ProdutosSemelhantes.nome}
                  destaque={ProdutosSemelhantes.destaque}
                  image={ProdutosSemelhantes.imagem}
                  price={ProdutosSemelhantes.price}
                  key={ProdutosSemelhantes.id}
                />
              )
          )}
        </S.ProductContainer>

        <S.StyledH3>Aproveite e veja tambem</S.StyledH3>

        <S.GridPorduct>
          {produtos.map(
            (produto) =>
              produto.destaque == false && (
                <ProductCard
                  name={produto.nome}
                  destaque={produto.destaque}
                  image={produto.imagem}
                  price={produto.price}
                  key={produto.id}
                />
              )
          )}
        </S.GridPorduct>
      </S.ContainerGrid>
    </div>
  );
}
