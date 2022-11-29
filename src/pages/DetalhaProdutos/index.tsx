import * as S from "./styles";
import { useContext, useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { ProductCardDetailed } from "../../components/ProductCardDetailed";
import { DetailedCarousel} from "../../components/DetailedCarousel"
import ProdutoApi from '../../api/Produto.api';
import { AuthContext } from "../../context/AuthContext";
import { ProdutoEntity } from "../../types/product.types";
import { useParams } from "react-router-dom";

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

  const produtosImagens = [
    {
      id: "01",
      imagem:
      "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg", 
  
    },
    {
      id: "02",
      imagem:
      "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
    },
    {
      id: "03",
      imagem:
      "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
  
    },
    {
      id: "04",
      imagem:
      "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
   
    }
  ];

  const produtoApi = new ProdutoApi();
  let { id } = useParams();
  

  const [openAlert, setOpenAlert] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<ProdutoEntity>();

  const getProdutoById = () => {
    produtoApi.getProdutoById(parseInt(id as string)).then((response: any) => {
      setSelectedProduct(response.data)
     
    }).catch((error) => {
      console.log(error)
    })
  }
  console.log(id)

  useEffect(() => {
    getProdutoById();
  }, [id])

  return (
    <div>

      <S.ProductContainer>
        <ProductCardDetailed
          nome={selectedProduct?.nome as string}
          valor={selectedProduct?.valor as number}
          key={selectedProduct?.id}
          descricao= {selectedProduct?.descricao as string}
          imagesArray={produtosImagens}
          id={selectedProduct?.id as number}
        />
      </S.ProductContainer>
      <S.ContainerGrid>
        <S.StyledH3>Produtos Semelhantes</S.StyledH3>
        
        {/* <DetailedCarousel/> */}

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
                  id={produto.id}
                />
              )
          )}
        </S.GridPorduct>
      </S.ContainerGrid>
    </div>
  );
}
