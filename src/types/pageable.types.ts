import { IFilters } from "./filters.types";

export interface IPageable {
  currentPage: number;
  pageSize: number;
  filters:{
    categoriaIds: string[],
    marcaIds: string[],
    cor: string,
    tamanho: string,
  };
}
