import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  h2,
  p {
    color: #000000;
  }

  a {
    color: #9b4a46;
  }

  Button {
    color: #ffffff;
  }
`;

export const InitOfPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  row-gap: 1rem;
  justify-content: space-between;

  IconButton {
    background: red;
  }
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  justify-content: flex-start;
`;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  width: 100%;
  
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  margin: 2rem 0;

`;

export const Footer = styled.div`
  p {
    color: #c2c2c2;
  }
`;

export const StyledLinkContainer = styled.div`

  padding-top: 20px;
  padding-left: 20px;
`;




