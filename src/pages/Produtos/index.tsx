import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProdutoApi from "../../api/Produto.api";
import { PaginationComponent } from '../../components/Paginator';
import { ProductCard } from '../../components/ProductCard';
import { TitleModules } from '../../components/TitleModules';
import { IProduto } from '../../types/product.types';
import {CiFilter} from 'react-icons/ci';

import * as S from './styles';

export const Produtos = () => {

    const produtoApi = new ProdutoApi();

    const [produtosList, setProdutosList] = useState<IProduto>();
    const [page, setPage] = useState(0)

    const getProdutos = () => {
        const produtctToApi = {
            ...produtosList,
            categoriaIds: [],
            marcaIds: [],
            cor: "",
            tamanho: "ALL"
        }

        produtoApi.getProdutos(produtctToApi as IProduto, page.toString()).then((response: any) => {
            setProdutosList(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => (
        getProdutos()
    ), [page])
    

    return (
        <S.Container>
            <S.ContainerTitle>
                <TitleModules/>
            </S.ContainerTitle>

            <S.Teste>
                <S.ContainerSubTitle>
                    <p>{`${produtosList?.content?.length} produtos`} </p>
                    <CiFilter color='#7A0000' cursor={'pointer'} size={30} />
                </S.ContainerSubTitle>
            </S.Teste>

            <div>
                <S.ContainerGrid>
                    <S.GridPorduct>
                        {produtosList?.content?.map((produto) => (
                            produto.destaque == false && (
                                <ProductCard
                                    name={produto.nome as string}
                                    destaque={produto.destaque}
                                    image={produto.imagemUrl as string}
                                    price={produto.valor}
                                    key={produto.id}
                                />
                            )

                        ))}
                    </S.GridPorduct>
                </S.ContainerGrid>
            </div>

            <S.PaginationArea>
                <PaginationComponent page={page} setPage={setPage} totalPages={produtosList?.totalPages as number}/>
            </S.PaginationArea>
        </S.Container>
    );
}