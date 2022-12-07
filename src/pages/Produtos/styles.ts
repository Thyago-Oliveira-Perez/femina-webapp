import styled from 'styled-components';

export const Container = styled.div`
    width: 100%
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`; 

export const ProductContainer = styled.div`
    display:flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
`;

export const ContainerGrid = styled.div`
    margin: 2rem 15rem;
`;

export const StyledH3 = styled.h3`
    margin: 2rem 0;
`;

export const GridPorduct = styled.div`
    display: grid;
    grid-template-columns: 20rem 20rem 20rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`;

export const ContainerSubTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
   margin-top: 1.5rem;
`;

export const Teste = styled.div`
    display: flex;
    justify-content: center;
`;

export const PaginationArea = styled.div`
    display: flex;
    justify-content: center;
    margin: 2em 0;
`;

export const ProgressContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;