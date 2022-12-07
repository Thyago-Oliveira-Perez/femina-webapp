import * as S from "./styles";
import { useContext, useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { ProductCardDetailed } from "../../components/ProductCardDetailed";
import { DetailedCarousel} from "../../components/DetailedCarousel"
import ProdutoApi from '../../api/Produto.api';
import { AuthContext } from "../../context/AuthContext";
import { ProdutoEntity } from "../../types/product.types";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


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

  const produtos = [
    {
      id: 0o1,
      nome: "aaaaa",
      imagemUrl:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      valor: 100,
      destaque: false,
    },
    {
      id: 0o5,
      nome: "aaaaa",
      imagemUrl:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      valor: 100,
      destaque: false,
    },
    {
      id: 0o5,
      nome: "aaaaa",
      imagemUrl:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      valor: 100,
      destaque: false,
    },
    {
      id: 0o1,
      nome: "aaaaa",
      imagemUrl:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      valor: 100,
      destaque: false,
    },
    {
      id: 0o5,
      nome: "aaaaa",
      imagemUrl:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      valor: 100,
      destaque: false,
    },
    {
      id: 0o5,
      nome: "aaaaa",
      imagemUrl:
        "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
      valor: 100,
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
  const [showLoad, setShowLoad] = useState(true);

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
  }, [id])

  return (
    <div>

      <S.ProductContainer>
      {showLoad ?
      <S.ProgressContainer>
          <CircularProgress style={{ color: '#7A0000' }}/>
        </S.ProgressContainer>
        : 
        <ProductCardDetailed
          nome={selectedProduct?.nome as string}
          valor={selectedProduct?.valor as number}
          key={selectedProduct?.id}
          descricao= {selectedProduct?.descricao as string}
          imagesArray={produtosImagens}
          id={selectedProduct?.id as number}
        />
      }
      </S.ProductContainer>
      <S.ContainerGrid>
        <S.StyledH3>Produtos Semelhantes</S.StyledH3>
        <DetailedCarousel produtos={produtos}/>

        <S.StyledH3>Aproveite e veja tambem</S.StyledH3>

      

          <S.GridPorduct>
            {produtos.map(
              (produto) =>
                produto.destaque == false && (
                  <ProductCard
                    name={produto.nome}
                    destaque={produto.destaque}
                    image={produto.imagemUrl}
                    price={produto.valor}
                    key={produto.id}
                    id={produto.id.toString()}
                  />
                )
            )}
          </S.GridPorduct>
       
    </S.ContainerGrid>
  </div>
  );
}
