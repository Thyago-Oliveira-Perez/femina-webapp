export interface IUser {
    id: number;
    cadastrado: string;
    atualizado?: null;
    isActive?: null;
    nome: string;
    login: string;
    senha: string;
    sexo: string;
    email: string;
    telefone: string;
    perfis?: (PerfisEntity)[] | null;
    provider: string;
    enabled: boolean;
    username: string;
    password: string;
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
    accountNonLocked: boolean;
    authorities?: null;
}
export interface PerfisEntity {
    id: number;
    cadastrado: string;
    atualizado?: null;
    isActive?: null;
    perfilName: string;
    authority: string;
}