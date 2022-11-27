export interface ICategoria {
    content?: (CategoriaEntity)[] | null;
    pageable: string;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
export interface CategoriaEntity {
    id: number;
    nome: string;
}
export interface Sort {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
}
