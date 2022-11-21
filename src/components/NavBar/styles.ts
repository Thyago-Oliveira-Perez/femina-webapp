import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavContainer = styled.div`
    background: #D4A9A7;
    color: white;
   
`;

export const Container = styled.ul`
    display:flex;
    justify-content: space-evenly;
    height: 3rem;
    
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 1rem;
    

    &:hover {
        color: #7A0000;
        background: #A77371;
        transition: all ease 0.5s;
    }

    
`;

