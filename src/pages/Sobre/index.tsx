import * as S from './styles';
import { Messages } from '../Login/styles';
import  'react-accordion-ts/src/panel.css' ;
import * as React from 'react';
import { Accordion } from 'react-accordion-ts';
import { Container } from '../Cliente/styles';
import { BiColumns } from 'react-icons/bi';

export function Sobre (){
      return(
            <div className='S.Container'>
                  <div className='S.Title'>
                              <S.Title>
                                    <h1>
                                          Sobre Nós
                                    </h1>
                                    <h2>
                                          Moda Intíma Infantil ao Adulto
                                    </h2>
                              </S.Title>
                              <img src="" alt="" />
                  </div>
            
                  <div className='S.Article'>  
                  
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula sit amet enim ac sagittis. 
                              Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, 
                              lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.</p>

                              <img src="img_girl.jpg" alt="StyledImage" />
                              
                  </div>
                  
                  Duvidas frequentes
                        <div className='S.Right'>
                                    <div className='ColumnA'>
                                          <h2>Formas de Pagamento</h2>
                                          <p>Aceitamos débito, crédito, pix e pagamentos à vista.</p>
                                    </div>
                                    <div className='ColumnC'>
                                          <h2>Entregas</h2>
                                          <p>Entregamos para todo Brasil com frete grátis.</p>
                                    </div>
                        </div>    
                        <div className='S.Left'>
                        <div className='ColumnB'>
                                          <h2>Trocas de devoluçoes</h2>
                                          <p>Aceitamos trocas apenas por erro de fav=bricante e sem unso da peça.</p>
                                    </div>
                        </div>
            
      </div>
          
      );
 }

