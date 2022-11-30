import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const ContainerItem = styled.div`
  background: #d4a9a7;
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;
  padding: 20px;
  
  border-radius: 8px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  width: 30%;
  height: 100%;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%
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
  width: 65%;
`;

export const StyledHr = styled.hr`
  background:white;
  width: 100%;
  border: none;
  padding: 1px;
`;

export const ButtonArea = styled.div`
  display: flex;
  align-items: flex-start;
  height: 90%;
`;
