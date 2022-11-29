import styled from 'styled-components';

export const Container = styled.div`
  width: 100%
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

 
`;
export const ModalContent = styled.div`
  margin: 40px 40px 40px 40px;
`;
export const ContainerItem = styled.div`
  background: #d4a9a7;
  display: flex;
  width: 100%;
  height: 40%;
 ` 
;

export const StyledImg = styled.img`
width: 55%;
height: 15rem;
`;

export const StyledName = styled.p`
  font-size: 1.5rem;
  width: 100%;
  line-height: 30px;
  display: flex;
  `;

export const StyledDescription = styled.p`
  font-size: 16px;
  line-height: 25px;
  width: 100%;
  `;

export const StyledPrice = styled.p`
  font-size: 20px;
  `;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: start;
  align-items: start;
  padding: 1.5rem 0.6rem;
  gap: 2rem;
  
  `;

export const StyledHr = styled.hr`
  background:white;
  width: 100%;
  border: none;
  padding: 1px;

  `;
