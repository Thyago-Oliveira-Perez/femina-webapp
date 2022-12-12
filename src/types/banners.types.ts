export interface IBannersGet {
    content: (ContentEntity)[] | null;
    pageable: Pageable
    last: boolean
    totalElements: number
    totalPages: number
    size: number
    number: number
    sort: Sort2
    first: boolean
    numberOfElements: number
    empty: boolean
  }
  
  export interface ContentEntity {
    id: string
    nome: string
    imagens: string
    tipo: string
    nomeUsuario: string
    usuario: Usuario
    imageNames: any
  }
  
  export interface Usuario {
    id: string
    cadastrado: string
    atualizado: any
    isActive: boolean
    nome: string
    login: string
    senha: string
    sexo: string
    email: string
    telefone: string
    cargos: (CargosEntity)[] | null;
    provider: string
    enabled: boolean
    password: string
    username: string
    accountNonExpired: boolean
    credentialsNonExpired: boolean
    authorities: any
    accountNonLocked: boolean
  }
  
  export interface CargosEntity {
    id: string
    cadastrado: string
    atualizado: any
    isActive: boolean
    cargoName: string
    authority: string
  }
  
  export interface Pageable {
    sort: Sort
    offset: number
    pageNumber: number
    pageSize: number
    unpaged: boolean
    paged: boolean
  }
  
  export interface Sort {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  
  export interface Sort2 {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }