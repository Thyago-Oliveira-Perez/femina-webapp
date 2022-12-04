import { Chip, MenuItem, SwipeableDrawer } from '@mui/material';
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
import { IProduto } from '../../types/product.types';
import ProdutoApi from '../../api/Produto.api';
import { IFilters } from '../../types/filters.types';
import { IPageable } from '../../types/pageable.types';


interface SideBarFilterProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    filterObj: IPageable;
    setFilterObj: React.Dispatch<React.SetStateAction<IPageable>>;
    filterProdutos: () => void
}

export const SideBarFilter = ({ open, setOpen, filterObj, setFilterObj, filterProdutos }: SideBarFilterProps) => {
    const categoriaApi = new CategoriasApi();
    const marcaApi = new MarcasApi();

    const categoriasToFilter: any[] = [];
    const marcasToFilter: number[] = [];

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

    const handleCategoriasToFilter = (id: any) => {
        if (!categoriasToFilter.includes(id)) {
            categoriasToFilter.push(id);
        } else {
            categoriasToFilter.splice(categoriasToFilter.indexOf(id), 1);
        }

        setFilterObj({ ...filterObj, 
                filters: {
                    ...filterObj.filters,
                    categoriaIds: categoriasToFilter
                } 
            })
        
    }

    const handleMarcasToFilter = (id: number) => {
        if (!marcasToFilter.includes(id)) {
            marcasToFilter.push(id);
            console.log()
        } else {
            marcasToFilter.splice(marcasToFilter.indexOf(id), 1);
        }

        setFilterObj({ ...filterObj, 
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
                            label="Categoria">
                            {categorias?.content?.map((categoria) =>
                                <Option
                                    key={categoria.id}
                                    onClick={() => handleCategoriasToFilter(categoria.id)}
                                    value={categoria.nome}>{categoria.nome}</Option>
                            )}


                        </Select>
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
                            onChange={(e) =>  
                                setFilterObj({ ...filterObj, 
                                    filters: {
                                        ...filterObj.filters,
                                        cor: e.target.value
                                        } 
                                    })} />

                        <Select style={{ width: '100%' }}
                            label="Tamanho"
                            onChange={(e: any) =>  
                                setFilterObj({ ...filterObj, 
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