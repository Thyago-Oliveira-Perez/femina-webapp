import * as S from './styles';

interface EmptyViewProps {
    message: string;
}

export const EmptyView = ({message}: EmptyViewProps) => {
    return (
        <S.Container>
            <p>{message}</p>
        </S.Container>

    );
}