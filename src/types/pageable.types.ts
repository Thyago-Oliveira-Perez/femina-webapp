import { IFilters } from "./filters.types";

export interface IPageable {
  currentPage: number;
  pageSize: number;
  filters: IFilters;
}
