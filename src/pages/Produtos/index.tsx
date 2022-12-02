import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProdutoApi from "../../api/Produto.api";
import { PaginationComponent } from "../../components/Paginator";
import { ProductCard } from "../../components/ProductCard";
import { TitleModules } from "../../components/TitleModules";
import { IProduto } from "../../types/product.types";
import { CiFilter } from "react-icons/ci";

import * as S from "./styles";
import { IconButton } from "@mui/material";
import { SideBarFilter } from "../../components/SideBarFilter";
import { IPageable } from "../../types/pageable.types";
import { IFilters } from "../../types/filters.types";

export const Produtos = () => {
  const produtoApi = new ProdutoApi();

  const { categoria, id } = useParams();

  const [produtosList, setProdutosList] = useState<IProduto>();
  const [openFilter, setOpenFilter] = useState(false);

  const allTamanhos: string = "ALL";

  const [pageable, setPageable] = useState<IPageable>({
    currentPage: 0,
    pageSize: 1,
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
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProdutos()
  }, [pageable.currentPage]);

  return (
    <S.Container>
      <S.ContainerTitle>
        <TitleModules />
      </S.ContainerTitle>

      <S.Teste>
        <S.ContainerSubTitle>
          <p>{`${produtosList?.content?.length} produtos`} </p>

          <IconButton onClick={() => setOpenFilter(true)}>
            <CiFilter color="#7A0000" cursor={"pointer"} size={30} />
          </IconButton>
        </S.ContainerSubTitle>
      </S.Teste>

      <SideBarFilter 
          open={openFilter} 
          setOpen={setOpenFilter} 
          filterObj={pageable} 
          setFilterObj={setPageable}
          filterProdutos={() => getProdutos()}
        />

      <div>
        <S.ContainerGrid>
          <S.GridPorduct>
            {produtosList?.content?.map(
              (produto) =>
                produto.destaque == true && (
                  <ProductCard
                    name={produto.nome as string}
                    destaque={produto.destaque}
                    image={produto.imagemUrl as string}
                    price={produto.valor}
                    key={produto.id}
                    id={produto.id as number}
                  />
                )
            )}
          </S.GridPorduct>
        </S.ContainerGrid>
      </div>

      <S.PaginationArea>
        <PaginationComponent
          page={pageable}
          setPage={setPageable}
          totalOfPages={produtosList?.totalPages as number}
        />
      </S.PaginationArea>
    </S.Container>
  );
};
