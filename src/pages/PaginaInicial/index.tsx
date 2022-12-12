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

export function PaginaInicial() {

    const produtoApi = new ProdutoApi();
    const bannerApi = new BannerApi();

    const navigate = useNavigate();
    const [produtosList, setProdutosList] = useState<IProduto | null>();
    const [banner, setBanner] = useState<IBannersGet | null>()

    var items = [
        {
            name: "Femina",
            img_src: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
            url: "",
        },
        {
            name: "aaa",
            img_src: "https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp",
            url: "",
        },
        {
            name: "teste",
            img_src: "https://picsum.photos/1024/480/?image=54",
            url: "",
        },
    ];
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


    const getBanners = () => {
        bannerApi.getBanners(pageable).then((response: any) => {
            setBanner(response.data)

        }).catch((error) => {
            console.log(error);
        })
    }

    console.log('banner', banner)

    useEffect(() => {
        getProdutos();
        getBanners();
    }, [])

    return (
        <div>

            <CarouselComponent buttonEnabled={true} listItems={banner?.content[0]?.imageNames as any[]} />


            <S.ContainerCarousel>
                <DetailedCarousel produtos={produtosList?.content as any[]} />
            </S.ContainerCarousel>

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
                                id={produto.id as string}
                            />
                        )
                    ))}
                </S.GridPorduct>
            </S.ContainerGrid>


        </div>
    );
}