import * as S from "./styles";
import { Header } from "../../components/Global/Header";
import {TextFieldComponent} from '../../components/Generic/TextField'
import { api } from "../../service/api";
import { useEffect, useState } from "react";

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

  

export function HomePage() {
  const [clientes, setClientes] = useState<ICliente[]>([]);
  console.log(clientes);

  const getCategorias = async () => {
    try {
      api.get("clientes").then((response) => {
        setClientes(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <>
      <Header />
      <TextFieldComponent label="Categorias"/>
    </>
  );
}
