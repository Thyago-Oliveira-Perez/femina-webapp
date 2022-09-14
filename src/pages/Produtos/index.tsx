import { ProductCard } from '../../components/ProductCard';
import{ ButtonComponent } from '../../components/ButtonComponent';

export function Produtos({}) {
    return (
        <>
            <ProductCard destaque={false} price={100} name={'C3PO'} image={'https://www.comboinfinito.com.br/principal/wp-content/uploads/2021/12/star-wars-eclipse-1-1.jpg'} />

            <ButtonComponent 
            title={'texto'}
            type={'button'}
            themeColor= {'red'}
            onClick={undefined}
            disabled={false}
            width= {'string'}
            height= {'string'}
            style = {{}}
            fullWidth = {true} 
            border = {true}
            disableRipple = {false}
            disablePaddingInline = {false}
            iconTop = {false}
            />
        </>
    );

    
}