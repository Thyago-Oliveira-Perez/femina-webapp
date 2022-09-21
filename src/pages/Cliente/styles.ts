import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
`;


export const FormContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
    margin: 2rem 0;

    p {
        color: rgba(0, 0, 0, 0.6);
    }
`;

export const DateForm = styled.div`
    display: flex;
    gap: 2rem;
`;

export const ButtonArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
    margin: 2rem 0;

    a {
        text-decoration: none;
        color: #9B4A46;

        &:hover {
            text-decoration-line: underline;
        }
    }

    p { 
        color: rgba(0, 0, 0, 0.6);
    }
`;