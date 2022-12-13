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
import { IPageable } from '../../types/pageable.types';
import { IBannersGet } from '../../types/banners.types';
import BannerApi from "../../api/Banner.api";

interface BannerLocalProps {
    name: string;
    img_src: string;
}

export function PaginaInicial() {

    const produtoApi = new ProdutoApi();
    const bannerApi = new BannerApi();

    const navigate = useNavigate();
    const [produtosList, setProdutosList] = useState<IProduto | null>();
    const [bannersColecao, setBannerColecao] = useState<IBannersGet>()
    const [bannersDestaque, setBannersDestaque] = useState<IBannersGet>()
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
        produtoApi.getProdutos(pageable).then((response: any) => {
            setProdutosList(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }


    const getBannersByDestaque = () => {
        bannerApi.getBanners('DESTAQUE').then((response: any) => {
            setBannersDestaque(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    const getBannersByColecao = () => {
        bannerApi.getBanners('COLECAO').then((response: any) => {
            setBannerColecao(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getProdutos();
        getBannersByDestaque();
        getBannersByColecao();
        
    }, [])

    return (
        <div>

            <CarouselComponent 
                buttonEnabled={true} 
                listItems={bannersDestaque?.imageNames as string[]} 
                itemUrl={bannersDestaque?.imagens as string} />


            <S.ContainerCarousel>
                <DetailedCarousel produtos={produtosList?.content as any[]} />
            </S.ContainerCarousel>

            <CarouselComponent 
                buttonEnabled={true} 
                listItems={bannersColecao?.imageNames as string[]} 
                itemUrl={bannersColecao?.imagens as string} />

            <S.ContainerGrid>
                <S.StyledH3>Nossos produtos</S.StyledH3>
                <S.GridPorduct>
                    {produtosList?.content?.map((produto) => (
                        produto.destaque == false && (
                            <ProductCard
                                name={produto.nome as string}
                                destaque={produto.destaque}
                                image={`${produto.imagem}/${produto.imageNames[0]}`}
                                price={produto.valor}
                                key={produto.id}
                                id={produto.id as string}
                            />
                        )
                    ))}
                </S.GridPorduct>
            </S.ContainerGrid>


        </div>
    );
}