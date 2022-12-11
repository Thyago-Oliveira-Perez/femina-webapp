import * as S from './styles';

import { TextFieldComponent } from '../../components/TextFieldComponent';
import { RadioButton } from '../../components/RadioButton';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material';
import { ButtonComponent } from '../../components/ButtonComponent';
import { Checkbox } from '../../components/Checkbox';
import { ICliente } from './Usuario.types';
import { useContext, useState } from 'react';
import { FormatPhone } from '../../utils/formatPhone';
import UserApi from "../../api/Users.api";
import { Alert } from "../../components/Alert";
import { IUserRequest, IUserUpdate } from '../../types/user.types';
import { Link, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { AuthContext } from '../../context/AuthContext';

export function UsuarioView() {
    const navigate = useNavigate();

    const userApi = new UserApi();
    const { userInfo } = useContext(AuthContext);
    const clienteObjInitialState = {
        id: userInfo?.id as string,
        nome: userInfo?.nome as string,
        login: userInfo?.login as string,
        sexo: userInfo?.sexo as string,
        telefone: userInfo?.telefone as string,
        email: userInfo?.email as string,
        isActive: true
    }

    const [clientForm, setClientForm] = useState<IUserUpdate>(clienteObjInitialState);
    const [openAlert, setOpenAlert] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const putUsuario = () => {
        userApi.updateUser(clientForm).then((response) => {
            console.log(response);
            setOpenAlert(true)
        }).catch((error) => {
            console.log(error)
            setOpenAlertError(true)
        })
    }

    return (
        <>
            <S.StyledLinkContainer>
                <Link style={{ textDecoration: 'none', color: '#7A0000' }} to="/">Voltar</Link>
            </S.StyledLinkContainer>
            <S.Container>

                <S.FormContainer>

                    <TextFieldComponent
                        label='Nome Completo'
                        value={clientForm?.nome}
                        style={{ width: "100%" }}
                        disabled={!isEdit}
                        onChange={(e) => setClientForm({ ...clientForm, nome: e.target.value })} />

                    <TextFieldComponent
                        label='Nome de login'
                        value={clientForm?.login}
                        style={{ width: "100%" }}
                        disabled={!isEdit}
                        onChange={(e) => setClientForm({ ...clientForm, login: e.target.value })} />

                    <FormControl>
                        <S.StyledFormLabel>Gênero</S.StyledFormLabel>
                        <RadioGroup
                            value={clientForm?.sexo}
                            onChange={(e) => setClientForm({ ...clientForm, sexo: e.target.value })}>
                            <S.StyledLabel disabled={!isEdit} value="FEMININO" control={<S.StyledRadio />} label="Feminino" />
                            <S.StyledLabel disabled={!isEdit} value="MASCULINO" control={<S.StyledRadio />} label="Maculino" />
                            <S.StyledLabel disabled={!isEdit} value="OUTRO" control={<S.StyledRadio />} label="Prefiro não informar" />
                        </RadioGroup>
                    </FormControl>

                    <TextFieldComponent
                        label='Telefone'
                        style={{ width: "100%" }}
                        value={clientForm?.telefone}
                        disabled={!isEdit}
                        onChange={(e) => setClientForm({ ...clientForm, telefone: FormatPhone(e.target.value) })} />

                    <TextFieldComponent
                        label='Email'
                        style={{ width: "100%" }}
                        value={clientForm?.email}
                        disabled={!isEdit}
                        onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })} />
                </S.FormContainer>

                <S.ButtonArea>
                    {!isEdit ? <ButtonComponent
                        themeColor='#740000'
                        title={'Editar'}
                        onClick={() => setIsEdit(true)}
                    /> : <ButtonComponent
                        themeColor='#9B4A46'
                        onClick={() => putUsuario()}
                        title={'Salvar'}
                    />}

                </S.ButtonArea>

                <Alert
                    alertStatus={openAlert}
                    setAlertStatus={setOpenAlert}
                    message="Sucesso ao editar usuario"
                    type='success' />

                <Alert
                    alertStatus={openAlertError}
                    setAlertStatus={setOpenAlertError}
                    message="Erro ao editar usuario"
                    type='error' />

            </S.Container>
        </>
    );
}