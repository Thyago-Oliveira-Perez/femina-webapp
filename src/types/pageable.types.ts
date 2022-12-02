import { IFilters } from "./filters.types";

export interface IPageable {
  currentPage: number;
  pageSize: number;
  filters:{
    categoriaIds: number[],
    marcaIds: number[],
    cor: string,
    tamanho: string,
  };
}
