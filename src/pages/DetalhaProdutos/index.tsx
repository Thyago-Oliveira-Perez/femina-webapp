import * as S from "./styles";
import { useContext, useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { ProductCardDetailed } from "../../components/ProductCardDetailed";
import { DetailedCarousel } from "../../components/DetailedCarousel"
import ProdutoApi from '../../api/Produto.api';
import { AuthContext } from "../../context/AuthContext";
import { IProduto, ProdutoEntity } from "../../types/product.types";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { IPageable } from "../../types/pageable.types";


interface ICarouselProps {
  produtos: {
    id: number,
    nome: string;
    destaque: boolean;
    imagemUrl: string;
    valor: number;
  }[];
}


export function DetalhaProdutos() {

  const produtoApi = new ProdutoApi();
  let { id } = useParams();
  const [openAlert, setOpenAlert] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<ProdutoEntity>();
  const [showLoad, setShowLoad] = useState(true);
  const [produtosList, setProdutosList] = useState<IProduto>();
  const allTamanhos: string = "ALL";
  const [pageable, setPageable] = useState<IPageable>({
    currentPage: 0,
    pageSize: 10,
    filters: {
      categoriaIds: [],
      marcaIds: [],
      cor: "",
      tamanho: allTamanhos,
    },
  });

  const getProdutos = () => {
    produtoApi
      .getProdutos(pageable)
      .then((response: any) => {
        setProdutosList(response.data);
        setShowLoad(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const getProdutoById = () => {
    produtoApi.getProdutoById(id as string)
      .then((response: any) => {
        setSelectedProduct(response.data)
        setShowLoad(false)
      }).catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getProdutoById();
    getProdutos()
  }, [id])

  return (
    <div>

      <S.ProductContainer>
        {showLoad ?
          <S.ProgressContainer>
            <CircularProgress style={{ color: '#7A0000' }} />
          </S.ProgressContainer>
          :
          <ProductCardDetailed
            nome={selectedProduct?.nome as string}
            valor={selectedProduct?.valor as number}
            key={selectedProduct?.id}
            descricao={selectedProduct?.descricao as string}
            imagem={selectedProduct?.imagem as string}
            imagesArray={selectedProduct?.imageNames as string[]}
            id={selectedProduct?.id as string}
          />
        }
      </S.ProductContainer>
      <S.ContainerGrid>
        <S.StyledH3>Produtos Semelhantes</S.StyledH3>

        <S.ContainerCarousel>
          <DetailedCarousel produtos={produtosList?.content as any[]} />
        </S.ContainerCarousel>

        <S.StyledH3>Aproveite e veja tambem</S.StyledH3>

        <S.GridPorduct>
          {produtosList?.content?.map(
            (produto) =>
              produto.destaque == false && (
                <ProductCard
                  name={produto.nome as string}
                  destaque={produto.destaque}
                  image={produto.imageNames != null ? `${produto?.imagem}/${produto?.imageNames[0]}` : ''}
                  price={produto.valor}
                  key={produto.id}
                  id={produto.id?.toString() as string}
                />
              )
          )}
        </S.GridPorduct>

      </S.ContainerGrid>
    </div>
  );
}
