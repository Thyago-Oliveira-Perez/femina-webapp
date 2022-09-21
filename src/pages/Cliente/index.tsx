import * as S from './styles';

import { TextFieldComponent } from '../../components/TextFieldComponent';
import { RadioButton } from '../../components/RadioButton';
import { FormControl, FormLabel } from '@mui/material';
import { ButtonComponent } from '../../components/ButtonComponent';
import { Checkbox } from '../../components/Checkbox';
import { ICliente } from './Cliente.types';
import { useState } from 'react';

export function Cliente() {

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

    console.log(clientForm);

    const disabledButton = (): boolean => {
        if (!clientForm.nome || !clientForm.email || !clientForm.password || read != true) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <S.Container>
            <S.TitleContainer>
                <h3>Seja bem vindo!</h3>
                <p>Crie uma conta e tenha mais comodidade na sua compra</p>
            </S.TitleContainer>

            <S.FormContainer>

                <TextFieldComponent label='Nome' style={{ width: "100%" }} onChange={(e) => setClientForm({ ...clientForm, nome: e.target.value })} />

                <FormControl>
                    <FormLabel>Gênero</FormLabel>
                    <RadioButton value="FEMININO" label='Feminino' />
                    <RadioButton value="MASCULINO" label='Masculino' />
                    <RadioButton value="FEMININO" label='Outros' />
                </FormControl>

                <TextFieldComponent label='Email' style={{ width: "100%" }} onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })} />
                <TextFieldComponent label='Senha' style={{ width: "100%" }} onChange={(e) => setClientForm({ ...clientForm, password: e.target.value })} />
                <TextFieldComponent label='Confirme sua senha' style={{ width: "100%" }} onChange={(e) => setClientForm({ ...clientForm, password: e.target.value })} />

                <Checkbox checked={read} onChange={(e) => setRead(e.target.checked)} label='Declaro que li os Termos de política e privacidade' />

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