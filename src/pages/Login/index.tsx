import { TextFieldComponent } from "../../components/TextFieldComponent";
import { useState, useContext } from "react";
import UserApi from "../../api/Users.api";
import { UserLogin } from "./FormLogin.types";
import { Form, InitOfPage, Messages, InputFields, Actions, Container, Footer } from "./styles";
import { Alert } from "../../components/Alert";
import { ButtonComponent } from "../../components/ButtonComponent";
import IconButton from '@mui/material/IconButton';
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import { AuthContext } from "../../context/AuthContext";

export default function FormLogin() {
  const actualYear = new Date().getFullYear();
  const loginApi = new UserApi();
  const authInfo = new AuthService();
  const navigate = useNavigate();

  const [openAlert, setOpenAlert] = useState(false);

  const [login, setLogin] = useState<UserLogin>({
    login: "",
    password: "",
  });

  function handleForm() {
    loginApi._login(login)
      .then((response: any) => {
        console.log(response)
        authInfo.setLoggedUser(response);
        navigate('produtos')
      }).catch((error) => {
        setOpenAlert(true)
        console.log(error)
      })
  };

  return (
    <Container>
      <Messages>
        <h2>Que bom termos você por aqui!</h2>
        <p>A equipe Femina agradece sua preferência.</p>
      </Messages>
      <Form>
        <InputFields>
          <TextFieldComponent
            style={{ width: '100%' }}
            label="Login"
            value={login.login}
            onChange={(e) =>
              setLogin({
                ...login,
                login: e.target.value,
              })
            }
          />
          <TextFieldComponent
            style={{ width: '100%' }}
            type="password"
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
          <ButtonComponent
            themeColor="#9B4A46"
            title="Entrar"
            onClick={() => handleForm()}
          />

          <p>Ou</p>

          <ButtonComponent
            themeColor="#7A0000"
            title="Entrar com o facebook"
          />

          <p>
            Novo por aqui? <a href="/cliente">Cadastre-se</a>
          </p>
        </Actions>
      </Form>

      <Alert
        alertStatus={openAlert}
        setAlertStatus={setOpenAlert}
        message="Erro de autenticação"
        type="error" />

      <Footer>
        <p>@{actualYear}, Femina.inc</p>
      </Footer>
    </Container>

  );
}
