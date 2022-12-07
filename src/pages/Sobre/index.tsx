import * as S from './styles';
import * as React from 'react';
import { useState } from 'react';
import { Accordions } from '../../components/Accordion';

export function Sobre (){
      const [showLoad, setShowLoad] = useState(true);

      return(
            <S.Container>
                <S.Title>
                  <h1>
                     Sobre o Femina
                  </h1>
            </S.Title>
            <S.Subtitle>
                  <h2>
                     Moda Intíma Infantil ao Adulto
                  </h2>
            </S.Subtitle>
                 
                  <S.Article>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula sit amet enim ac sagittis. 
                  Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, 
                  lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.</p>              
                  </S.Article>      

            <Accordions           
            /> 
      </S.Container>
      );
 }

