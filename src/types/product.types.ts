import { MouseEventHandler } from 'react';
export interface IProduto {
    content?: (ProdutoEntity)[] | null;
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
export interface ProdutoEntity {
    id?: number;
    nome?: string;
    codigo?: string;
    valor: number;
    marca?: ModeloEntityOrMarcaOrCategoria;
    categoria?: ModeloEntityOrMarcaOrCategoria;
    modelo?: (ModeloEntityOrMarcaOrCategoria)[] | null;
    fornecedor?: Fornecedor;
    tamanho?: string;
    cor?: string;
    descricao?: string;
    imagemUrl?: string;
    destaque: boolean;
    imageNames?: null;
}
export interface ModeloEntityOrMarcaOrCategoria {
    id: number;
    cadastrado: string;
    atualizado?: null;
    isActive: boolean;
    nome: string;
}
export interface Fornecedor {
    id: number;
    cadastrado: string;
    atualizado?: null;
    isActive: boolean;
    name: string;
    cnpj: string;
    telefone: string;
    email: string;
}
export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}
