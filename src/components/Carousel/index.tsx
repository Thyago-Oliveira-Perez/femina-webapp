import React from "react";
import Carousel from "react-material-ui-carousel";
import * as S from './styles';

interface CarouselProps {
  buttonEnabled?: boolean;
  listItems: { 
    name: string; 
    img_src: string; 
    url: string; 
  }[];
  indicators?: boolean;
}

export function CarouselComponent({buttonEnabled, listItems, indicators}: CarouselProps) {
  
    return (
        <Carousel
        indicators={indicators}
          next={() => { }}
          prev={() => { }}
        >
          {listItems?.map((item, i) => (
            <Item key={i} item={item} button={buttonEnabled} />
          ))}
        </Carousel>
    );
};

function Item(props: any) {
    return (
        <S.StyledPaper>
            <S.BoxArea>
                <S.SlideArea>
                    <S.TextTitle>{props.item.name}</S.TextTitle>
                </S.SlideArea>
                { props.button == true 
                  ? <S.ButtonArea>
                      <S.StyledButton>Saiba Mais</S.StyledButton>
                    </S.ButtonArea> 
                  : <></> }
            </S.BoxArea>
            <S.StyledImagem src={props.item.img_src} />
        </S.StyledPaper>
    );
};