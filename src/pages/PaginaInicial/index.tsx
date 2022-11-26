import * as S from './styles';
import { useState, useContext, useEffect } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { CarouselComponent } from '../../components/Carousel';
import { IProduto, ProdutoEntity } from '../../types/product.types';
import ProdutoApi from "../../api/Produto.api";
import { PaginationComponent } from '../../components/Paginator';
import { Pagination } from '@mui/material';
import { DetailedCarousel } from '../../components/DetailedCarousel';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function PaginaInicial() {

    const produtoApi = new ProdutoApi();
    
    const navigate = useNavigate();
    const [produtosList, setProdutosList] = useState<IProduto | null>();

    var items = [
        {
            name: "Femina",
            img_src: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
            url: "",
        },
        {
            name: "",
            img_src: "https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp",
            url: "",
        },
        {
            name: "teste",
            img_src: "https://picsum.photos/1024/480/?image=54",
            url: "",
        },
    ];

    const getProdutos = () => {
        const produtctToApi = {
            ...produtosList,
            categoriaIds: [],
            marcaIds: [],
            cor: "",
            tamanho: "ALL"
        }

        produtoApi.getProdutos(produtctToApi as IProduto, '0').then((response: any) => {
            setProdutosList(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => (
        getProdutos()
    ), [])
    
    return (
        <div>

            <CarouselComponent buttonEnabled={true} listItems={items} />

            {/* <S.ContainerCarousel>
                <DetailedCarousel produtos={produtosList?.content}/>
            </S.ContainerCarousel> */}
            

            <S.ProductContainer>
                {produtosList?.content?.map((produto) => (
                    produto.destaque == true && (
                        <ProductCard
                            name={produto.nome as string}
                            destaque={produto.destaque}
                            image={produto.imagemUrl as string}
                            price={produto.valor}
                            key={produto.id}
                            onClickButton={() => navigate(`/produto/${produto.id}`)}
                        />
                    )
                ))}
            </S.ProductContainer>

            <CarouselComponent buttonEnabled={true} listItems={items} />

            <S.ContainerGrid>
                <S.StyledH3>Nossos produtos</S.StyledH3>
                <S.GridPorduct>
                    {produtosList?.content?.map((produto) => (
                        produto.destaque == false && (
                            <ProductCard
                                name={produto.nome as string}
                                destaque={produto.destaque}
                                image={produto.imagemUrl as string}
                                price={produto.valor}
                                key={produto.id}
                                onClickButton={() => navigate(`/produto/${produto.id}`)}
                            />
                        )
                    ))}
                </S.GridPorduct>
            </S.ContainerGrid>


        </div>
    );
}