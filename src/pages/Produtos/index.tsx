import { useEffect, useState } from 'react';
import ProdutoApi from "../../api/Produto.api";
import { PaginationComponent } from '../../components/Paginator';
import { ProductCard } from '../../components/ProductCard';
import { IProduto } from '../../types/product.types';

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
        <div>
            <div>
            <S.ContainerGrid>
                <S.GridPorduct>
                    {produtosList?.content?.map((produto) => (
                        produto.destaque == false && (
                            <ProductCard
                                name={produto.nome}
                                destaque={produto.destaque}
                                image={produto.imagemUrl}
                                price={produto.valor}
                                key={produto.id}
                            />
                        )

                    ))}
                </S.GridPorduct>
            </S.ContainerGrid>
            </div>
            <div>
                <PaginationComponent page={page} setPage={setPage} totalPages={produtosList?.totalPages as number}/>
            </div>
        </div>
    );
}