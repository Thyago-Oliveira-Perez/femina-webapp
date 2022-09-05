import { Button, TextField } from "@mui/material";
import { useState } from "react";
import UserApi from "../../api/Users.api";
import { UserLogin } from "./FormLogin.types";
import { Form, Messages, InputFields, Actions } from "./styles";

export default function FormLogin() {
  const loginApi = new UserApi();

  const [login, setLogin] = useState<UserLogin>({
    login: "",
    password: "",
  });

  function handleForm(){
    loginApi._login(login)
      .then((response: any) => {
      console.log(response.data)
    })
  };

  return (
    <Form>
      <Messages>
        <h2>Que bom termos você por aqui!</h2>
        <p>A equipe Femina agradece sua preferência.</p>
      </Messages>
      <InputFields>
        <TextField
          label="Login"
          value={login.login}
          onChange={(e) =>
            setLogin({
              ...login,
              login: e.target.value,
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
        <Button style={{ backgroundColor: "#9B4A46" }} variant="contained" onClick={() => handleForm()}>
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
