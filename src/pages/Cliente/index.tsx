import * as S from "./styles";
import { BaseContainer } from "../../utils/Layout/BaseContainer";
import { useEffect, useState } from "react";
import { api } from "../../service/api";

export interface ICliente {
  id: number;
  cadastrado: string;
  atualizado: string;
  nome: string;
  login: string;
  cpf: string;
  sexo: string;
  dataNascimento: string;
  email: string;
  telefone: string;
  pais: string;
  estado: string;
  cidade: string;
  logradouro: string;
  numero: string;
  cep: string;
}

export function Cliente() {
  const [cliente, setCliente] = useState<ICliente[]>([]);

  const getClientes = () => {
    api
      .get("/api/clientes")
      .then(({ data }) => {
        setCliente(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getClientes();
  }, []);

  return (
    <BaseContainer>
      <h1>pagina de clientes</h1>
      {cliente.map((cliente) => (
        <p>{cliente.nome}</p>
      ))}
    </BaseContainer>
  );
}
