import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 1em;
    margin-top: 2rem;

    h1 {
        color: rgba(0, 0, 0, 0.6);
        font-weight: 400;
        font-size: 30px;
    }

    hr {
        background: #9B4A46;
        border: 1px solid white;
        width: 100%;
    }
`;