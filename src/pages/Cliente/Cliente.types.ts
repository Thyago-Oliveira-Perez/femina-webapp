export interface ICliente {
    id: number;
    cadastrado: string;
    atualizado: string;
    isActive: boolean;
    nome: string;
    login: string;
    senha: string;
    sexo: string;
    email: string;
    telefone: string;
    perfis?: any[];
    enabled: boolean;
    password: string;
    username: string;
    credentialsNonExpired: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    authorities?: any[];
}
  