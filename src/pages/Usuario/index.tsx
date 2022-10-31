import * as S from './styles';

import { TextFieldComponent } from '../../components/TextFieldComponent';
import { RadioButton } from '../../components/RadioButton';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material';
import { ButtonComponent } from '../../components/ButtonComponent';
import { Checkbox } from '../../components/Checkbox';
import { ICliente } from './Usuario.types';
import { useState } from 'react';
import { FormatPhone } from '../../utils/formatPhone';

export function Usuario() {

    const clienteObjInitialState = {
        id: 0,
        cadastrado: "",
        atualizado: "",
        isActive: true,
        nome: "",
        login: "",
        senha: "",
        sexo: "",
        email: "",
        telefone: "",
        perfis: [],
        enabled: true,
        password: "",
        username: "",
        credentialsNonExpired: true,
        accountNonExpired: true,
        accountNonLocked: true,
        authorities: []
    }

    const [clientForm, setClientForm] = useState<ICliente>(clienteObjInitialState);
    const [read, setRead] = useState<boolean>(false);
    const [validatePassword, setValidatePassword] = useState('');

    console.log(clientForm);

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
                    value={clientForm.senha}
                    style={{ width: "100%" }}
                    onChange={(e) => setClientForm({ ...clientForm, senha: e.target.value })} />

                <TextFieldComponent
                    type='password'
                    label='Confirme sua senha'
                    value={validatePassword}
                    style={{ width: "100%" }}
                    onChange={(e) => { setValidatePassword(e.target.value); validaSenha(clientForm.senha, validatePassword)}} />

                <Checkbox
                    checked={read}
                    onChange={(e) => setRead(e.target.checked)}
                    label='Declaro que li os Termos de política e privacidade' />

            </S.FormContainer>

            <S.ButtonArea>
                <ButtonComponent themeColor='#9B4A46' title={'Criar cadastro'} disabled={disabledButton()} />
                <p>Ou crie com o facebook</p>
                <ButtonComponent title={'Continuar com o facebook'} />
                <p>Já possui cadastro? <a href="/">Entrar</a> </p>
            </S.ButtonArea>

        </S.Container>
    );
}