import * as S from './styles';
import { ProductCard } from '../../components/ProductCard';

export function Produtos() {
    return (
        <>
            <ProductCard destaque={false} price={100} name={'C3PO'} image={'https://www.comboinfinito.com.br/principal/wp-content/uploads/2021/12/star-wars-eclipse-1-1.jpg'} />
        </>
    );
}