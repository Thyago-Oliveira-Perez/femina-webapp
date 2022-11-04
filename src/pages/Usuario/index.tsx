import * as S from './styles';

import { TextFieldComponent } from '../../components/TextFieldComponent';
import { RadioButton } from '../../components/RadioButton';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material';
import { ButtonComponent } from '../../components/ButtonComponent';
import { Checkbox } from '../../components/Checkbox';
import { ICliente } from './Usuario.types';
import { useState } from 'react';
import { FormatPhone } from '../../utils/formatPhone';
import UserApi from "../../api/Users.api";
import { Alert } from "../../components/Alert";
import { IUserRequest } from '../../types/user.types';

export function Usuario() {

    const userApi = new UserApi();

    const clienteObjInitialState = {
        nome: "",
        password: "",
        login: "",
        sexo: "",
        telefone: "",
        email: "",
        cargo: ""
    }

    const [clientForm, setClientForm] = useState<IUserRequest>(clienteObjInitialState);
    const [read, setRead] = useState<boolean>(false);
    const [validatePassword, setValidatePassword] = useState('');
    const [openAlert, setOpenAlert] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);

    console.log(clientForm);

    const postUser = () => {
        const client = {
            ...clientForm,
            cargo: "USUARIO"
        }
        userApi.registerUserBySelf(client)
            .then((response) => {
            console.log(response);
            setOpenAlert(true);

        }).catch((error) => {
            console.log(error);
            console.log(error)
            setOpenAlertError(true);
        })
    }

    const disabledButton = (): boolean => {
        if (!clientForm.nome || !clientForm.email || !clientForm.password || read != true) {
            return true;
        } else {
            return false;
        }
    }

    const validaSenha = (passwordForUser: string, password: string) => {
        if (passwordForUser != password) {
            console.log('aaaaa');
        }
    }

    return (
        <S.Container>
            <S.TitleContainer>
                <h3>Seja bem-vindo(a)!</h3>
                <p>Crie uma conta e tenha mais comodidade na sua compra</p>
            </S.TitleContainer>

            <S.FormContainer>

                <TextFieldComponent
                    label='Nome Completo'
                    value={clientForm.nome}
                    style={{ width: "100%" }}
                    onChange={(e) => setClientForm({ ...clientForm, nome: e.target.value })} />

                <TextFieldComponent
                    label='Nome de login'
                    value={clientForm.login}
                    style={{ width: "100%" }}
                    onChange={(e) => setClientForm({ ...clientForm, login: e.target.value })} />

                <FormControl>
                    <S.StyledFormLabel>Gênero</S.StyledFormLabel>
                    <RadioGroup onChange={(e) => setClientForm({ ...clientForm, sexo: e.target.value })}>
                        <S.StyledLabel value="FEMININO" control={<S.StyledRadio />} label="Feminino" />
                        <S.StyledLabel value="MASCULINO" control={<S.StyledRadio />} label="Maculino" />
                        <S.StyledLabel value="OUTROS" control={<S.StyledRadio />} label="Prefiro não informar" />
                    </RadioGroup>
                </FormControl>

                <TextFieldComponent
                    label='Telefone'
                    style={{ width: "100%" }}
                    value={clientForm.telefone}
                    onChange={(e) => setClientForm({ ...clientForm, telefone: FormatPhone(e.target.value) })} />

                <TextFieldComponent
                    label='Email'
                    style={{ width: "100%" }}
                    value={clientForm.email}
                    onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })} />

                <TextFieldComponent
                    type='password'
                    label='Senha'
                    value={clientForm.password}
                    style={{ width: "100%" }}
                    onChange={(e) => setClientForm({ ...clientForm, password: e.target.value })} />

                <TextFieldComponent
                    type='password'
                    label='Confirme sua senha'
                    value={validatePassword}
                    style={{ width: "100%" }}
                    onChange={(e) => { setValidatePassword(e.target.value); validaSenha(clientForm.password, validatePassword) }} />

                <Checkbox
                    checked={read}
                    onChange={(e) => setRead(e.target.checked)}
                    label='Declaro que li os Termos de política e privacidade' />

            </S.FormContainer>

            <S.ButtonArea>
                <ButtonComponent
                    themeColor='#9B4A46'
                    title={'Criar cadastro'}
                    disabled={disabledButton()}
                    onClick={() => postUser()} />

                <p>Ou crie com o facebook</p>

                <ButtonComponent
                    title={'Continuar com o facebook'} />

                <p>Já possui cadastro? <a href="/">Entrar</a> </p>
            </S.ButtonArea>

            <Alert
                alertStatus={openAlert}
                setAlertStatus={setOpenAlert}
                message="Sucesso ao cadastrar usuario"
                type='success' />

            <Alert
                alertStatus={openAlertError}
                setAlertStatus={setOpenAlertError}
                message="Erro ao cadastrar usuario"
                type='error' />

        </S.Container>
    );
}