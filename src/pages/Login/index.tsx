import { TextFieldComponent } from "../../components/TextFieldComponent";
import { useEffect, useState } from "react";
import UserApi from "../../api/Users.api";
import { UserLogin } from "./FormLogin.types";
import { Form, InitOfPage, Messages,StyledLinkContainer, InputFields, Actions, Container, Footer } from "./styles";
import { Alert } from "../../components/Alert";
import { ButtonComponent } from "../../components/ButtonComponent";
import IconButton from '@mui/material/IconButton';
import { AiOutlineLeft } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from "../../services/auth.service";
import { useEditable } from "@chakra-ui/react";

export default function FormLogin() {
  const [showLoad, setShowLoad] = useState(true);
  const actualYear = new Date().getFullYear();
  const loginApi = new UserApi();
  const authService = new AuthService();
  const navigate = useNavigate();
 

  const [openAlert, setOpenAlert] = useState(false);
  const [openAlertError, setOpenAlertError] = useState(false);

  const [login, setLogin] = useState<UserLogin>({
    login: "",
    password: "",
  });


  function handleForm() {
    loginApi.login(login)
      .then((response: any) => {
        authService.setLoggedUser(response);
        setOpenAlert(true)
        navigate('/')
      }).catch((error) => {
        setOpenAlertError(true)
        console.log(error)
      })
  };

  return (
    <>
      <StyledLinkContainer>
          <Link style={{textDecoration: 'none', color: '#7A0000'}} to="/">Voltar</Link>
      </StyledLinkContainer>
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
              onChange={(e) => setLogin({
                ...login,
                login: e.target.value,
              })} />
            <TextFieldComponent
              style={{ width: '100%' }}
              type="password"
              label="Senha"
              value={login.password}
              onChange={(e) => setLogin({
                ...login,
                password: e.target.value,
              })} />
          </InputFields>
          <Actions>
            <a href="#">Esqueceu sua senha?</a>
            <ButtonComponent
              themeColor="#9B4A46"
              title="Entrar"
              onClick={() => handleForm()} />

            <p>Ou</p>

            <ButtonComponent
              themeColor="#7A0000"
              title="Entrar com o facebook" />

            <p>
              Novo por aqui?<a href="/usuario">Cadastre-se</a>
            </p>
          </Actions>
        </Form>

        <Alert
          alertStatus={openAlertError}
          setAlertStatus={setOpenAlertError}
          message="Erro de autenticação"
          type="error" />

        <Alert
          alertStatus={openAlert}
          setAlertStatus={setOpenAlert}
          message="Redirecionando...."
          type="success" />

        <Footer>
          <p>@{actualYear}, Femina.inc</p>
        </Footer>
      </Container></>

  );
}
