export interface IMarca {
    content?: (MarcaEntity)[] | null;
    pageable: Pageable;
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
export interface MarcaEntity {
    id: number;
    cadastrado: string;
    atualizado?: null;
    isActive: boolean;
    nome: string;
}
export interface Pageable {
    sort: Sort;
    offset: number;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    unpaged: boolean;
}
export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}
