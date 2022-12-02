import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
`;
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40px;
    align-items: center;
    row-gap: 2rem;
    margin: 2rem 0;

    p {
        color: rgba(0, 0, 0, 0.6);
    }
`;
export const Subtitle = styled.div`
display: flex;
flex-direction: column;
height: 40px;
align-items: center;
row-gap: 2rem;
margin: 2rem 0;
p {
    color: #D4A9A7;
}
`;
export const Article = styled.div`
    display: flex;
    align-items: flex;
    img {
        float: left;
        width: 500px;
        height: 500px;
    }
      
`;



