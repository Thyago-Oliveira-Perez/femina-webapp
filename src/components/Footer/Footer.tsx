import { useState } from 'react';
import * as S from "./style";
import Logo from '../../../public/logo.svg';

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.footerSections>
        <S.h2>Endereço</S.h2>
        <S.p>Rua Rui Barbosa, n 2050</S.p>
        <S.p>Centro, Itaipulândia - PR</S.p>
        <S.p>CEP: 85880-00</S.p>
      </S.footerSections>
      <S.footerSections> 
            <img src={Logo} alt="logo" /> 
       </S.footerSections>
      <S.footerSections>
        <S.h2>Entre em contato conosco</S.h2>
        <S.p><a href="https://www.instagram.com/femina_modaintima/">@femina_modaintima</a></S.p>
        <S.p>{"(45) 9 9984-5175"}</S.p>
        <S.p>facebook/femina_modaintima</S.p>
      </S.footerSections>
    </S.FooterContainer>
  );

  }
