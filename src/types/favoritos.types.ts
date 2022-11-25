// POST
export interface IFavoritos {
    idUser: number;
    idProduto: number;
}

// GET
export interface IFavoritosGet {
    content?: (ContentEntity)[] | null;
    pageable: Pageable;
    totalPages: number;
    last: boolean;
    totalElements: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export interface ContentEntity {
    id: number;
    usuario: Usuario;
    produto: Produto;
}

export interface Usuario {
    id: number;
    cadastrado: string;
    atualizado?: null;
    isActive: boolean;
    nome: string;
    login: string;
    senha: string;
    sexo: string;
    email: string;
    telefone: string;
    cargos?: (CargosEntity)[] | null;
    provider: string;
    enabled: boolean;
    password: string;
    accountNonExpired: boolean;
    username: string;
    credentialsNonExpired: boolean;
    authorities?: null;
    accountNonLocked: boolean;
}

export interface CargosEntity {
    id: number;
    cadastrado: string;
    atualizado?: null;
    isActive: boolean;
    cargoName: string;
    authority: string;
}

export interface Produto {
    id: number;
    cadastrado: string;
    atualizado?: null;
    isActive: boolean;
    codigo: string;
    nome: string;
    valor: number;
    categoria: ModeloEntityOrCategoriaOrMarca;
    modelo?: (ModeloEntityOrCategoriaOrMarca)[] | null;
    fornecedor: Fornecedor;
    marca: ModeloEntityOrCategoriaOrMarca;
    cor: string;
    tamanho: string;
    descricao: string;
    imagem: string;
    destaque: boolean;
}

export interface ModeloEntityOrCategoriaOrMarca {
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

export interface Pageable {
    sort: Sort;
    offset: number;
    pageSize: number;
    pageNumber: number;
    unpaged: boolean;
    paged: boolean;
}

export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}
