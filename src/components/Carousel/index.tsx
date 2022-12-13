import React from "react";
import Carousel from "react-material-ui-carousel";
import * as S from './styles';

interface CarouselProps {
  buttonEnabled?: boolean;
  listItems: string[];
  indicators?: boolean;
  itemUrl: string;
}

export function CarouselComponent({buttonEnabled, listItems, itemUrl, indicators}: CarouselProps) {

  console.log(listItems)
    return (
        <Carousel
        indicators={indicators}
          next={() => { }}
          prev={() => { }}
        >
          {listItems 
          ? listItems?.map((item, i) => (
            <Item key={i} item={item} itemUrl={itemUrl} button={buttonEnabled} />
          )) : []}
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
            <S.StyledImagem src={`${props.itemUrl}/${props.item}`} />
        </S.StyledPaper>
    );
};