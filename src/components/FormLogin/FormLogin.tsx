import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Form, Messages, InputFields, Actions } from "./styles";

export default function FormLogin() {
  const loginApi = "";

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleForm = () => {};

  return (
    <Form>
      <Messages>
        <h2>Que bom termos você por aqui!</h2>
        <p>A equipe Femina agradece sua preferência.</p>
      </Messages>
      <InputFields>
        <TextField
          label="Email"
          value={login.email}
          onChange={(e) =>
            setLogin({
              ...login,
              email: e.target.value,
            })
          }
        />
        <TextField
          label="Senha"
          value={login.password}
          onChange={(e) =>
            setLogin({
              ...login,
              password: e.target.value,
            })
          }
        />
      </InputFields>
      <Actions>
        <a href="#">Esqueceu sua senha?</a>
        <Button style={{ backgroundColor: "#9B4A46" }} variant="contained">
          Entrar
        </Button>
        <p>Ou</p>
        <Button style={{ backgroundColor: "#7A0000" }} variant="contained">
          Entrar com o facebook
        </Button>
        <p>
          Novo por aqui? <a href="#">Cadastre-se</a>
        </p>
      </Actions>
    </Form>
  );
}
