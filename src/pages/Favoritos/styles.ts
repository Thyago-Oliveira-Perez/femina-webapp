import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    margin: 40px;
   
`;
export const Container = styled.div`
    width: 100%
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ModalContent = styled.div`
    position: absolute; 
	inset: 195px;
`;

export const ProgressContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PaginationArea = styled.div`
    display: flex;
    justify-content: center;
    margin: 2em 0;
`;
