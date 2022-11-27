import { MenuItem, SwipeableDrawer } from '@mui/material';
import { useEffect, useState } from 'react';
import { TextFieldComponent } from '../TextFieldComponent';
import * as S from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Select } from '../Select';
import { Option } from '../Select/styles';
import { ButtonComponent } from '../ButtonComponent';
import CategoriasApi from '../../api/Categorias.api';
import MarcasApi from '../../api/Marcas.api';
import { ICategoria } from '../../types/categorias.types';
import { IMarca } from '../../types/marcas.types';

interface SideBarFilterProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBarFilter = ({ open, setOpen }: SideBarFilterProps) => {
    const categoriaApi = new CategoriasApi();
    const marcaApi = new MarcasApi();
    const [categorias, setCategorias] = useState<ICategoria>();
    const [marcas, setMarcas] = useState<IMarca>()

    const getCategorias = () => {
        categoriaApi.getCategorias().then((response: any) => {
            setCategorias(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }

    const getMarcas = () => {
        marcaApi.getMarcas().then((response: any) => {
            setMarcas(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getCategorias();
        getMarcas();
    }, [])

    return (
        <>
            <SwipeableDrawer
                anchor={'right'}
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <S.Container>
                    <S.TitleFilter>
                        <h3>Filtrar produtos</h3>
                        <AiOutlineCloseCircle onClick={() => setOpen(false)} color='#c2c2c2' size={20} cursor={'pointer'} />
                    </S.TitleFilter>

                    <S.FilterContainer>
                        <Select
                            style={{ width: '100%' }}

                            label="Categoria">
                            {categorias?.content?.map((categoria) =>
                                <Option>{categoria.nome}</Option>
                            )}


                        </Select>
                        <Select
                            style={{ width: '100%' }}

                            label="Marca">
                            {marcas?.content?.map((marca) =>
                                <Option>{marca.nome}</Option>
                            )}

                        </Select>
                        <Select
                            style={{ width: '100%' }}

                            label="Cor">
                            <Option>Cheguei aq</Option>

                        </Select>
                        <Select
                            style={{ width: '100%' }}

                            label="Tamanho">
                            <Option>Cheguei aq</Option>

                        </Select>
                    </S.FilterContainer>

                    <S.ButtonArea>
                        <ButtonComponent width='100%' themeColor='#9B4A46' title={'Filtrar'} />
                    </S.ButtonArea>
                </S.Container>
            </SwipeableDrawer>
        </>

    );
}