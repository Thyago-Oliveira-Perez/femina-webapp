export interface IBannersGet {
  id: string;
  nome: string;
  imagens: string;
  tipo: string;
  nomeUsuario: string;
  imageNames?: (string)[] | null;
}
