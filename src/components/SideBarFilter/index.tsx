import { SwipeableDrawer } from '@mui/material';
import { useEffect, useState } from 'react';
import { TextFieldComponent } from '../TextFieldComponent';
import * as S from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Select } from '../Select';
import { Option } from '../Select/styles';
import { ButtonComponent } from '../ButtonComponent';
import MarcasApi from '../../api/Marcas.api';
import { IMarca } from '../../types/marcas.types';
import { IPageable } from '../../types/pageable.types';


interface SideBarFilterProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    filterObj: IPageable;
    setFilterObj: React.Dispatch<React.SetStateAction<IPageable>>;
    filterProdutos: () => void
}

export const SideBarFilter = ({ open, setOpen, filterObj, setFilterObj, filterProdutos }: SideBarFilterProps) => {
    const marcaApi = new MarcasApi();

    const marcasToFilter: any[] = [];

    const [marcas, setMarcas] = useState<IMarca>()

    const getMarcas = () => {
        marcaApi.getMarcas().then((response: any) => {
            setMarcas(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {

        getMarcas();
    }, [])


    const handleMarcasToFilter = (id: number) => {
        if (!marcasToFilter.includes(id)) {
            marcasToFilter.push(id);
            console.log()
        } else {
            marcasToFilter.splice(marcasToFilter.indexOf(id), 1);
        }

        setFilterObj({
            ...filterObj,
            filters: {
                ...filterObj.filters,
                marcaIds: marcasToFilter
            }
        })
    }

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
                            label="Marca"

                        >
                            {marcas?.content?.map((marca) =>
                                <Option
                                    key={marca.id}
                                    onClick={() => handleMarcasToFilter(marca.id)}
                                    value={marca.id}>{marca.nome}</Option>
                            )}

                        </Select>

                        <TextFieldComponent
                            label='Cor'
                            value={filterObj.filters.cor}
                            onChange={(e) =>
                                setFilterObj({
                                    ...filterObj,
                                    filters: {
                                        ...filterObj.filters,
                                        cor: e.target.value
                                    }
                                })} />

                        <Select style={{ width: '100%' }}
                            label="Tamanho"
                            value={filterObj.filters.tamanho}
                            onChange={(e: any) =>
                                setFilterObj({
                                    ...filterObj,
                                    filters: {
                                        ...filterObj.filters,
                                        tamanho: e.target.value
                                    }
                                })}
                        >
                            <Option value={'P'}>P</Option>
                            <Option value={'M'}>M</Option>
                            <Option value={'G'}>G</Option>
                            <Option value={'ALL'}>Todos</Option>

                        </Select>
                    </S.FilterContainer>

                    <S.ButtonArea>
                        <ButtonComponent onClick={filterProdutos} width='100%' themeColor='#9B4A46' title={'Filtrar'} />
                    </S.ButtonArea>
                </S.Container>
            </SwipeableDrawer>
        </>

    );
}