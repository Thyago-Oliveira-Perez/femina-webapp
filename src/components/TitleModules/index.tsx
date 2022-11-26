import { useParams } from 'react-router-dom';
import * as S from './styles';

export const TitleModules = () => {
    let { categoria } = useParams();

    return (
        <S.Container>
            <h1>{categoria}</h1>

            <hr style={{padding: '1px', color: 'red'}} />
        </S.Container>
        
    );
}