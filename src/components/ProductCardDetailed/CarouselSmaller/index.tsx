import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Key } from "react";
import * as S from "./styles"

import { Height } from "@mui/icons-material";


interface ImageProps {
  images: any[]
}

const imageCarosel = function ( id: string, urlText: string | undefined) {
  return <img id={id} style={{ backgroundSize :'cover', width : '80%', height : '300px'}}  src={urlText} key={id} />   ;
};

export function CarouselSmaller({images}: ImageProps) {
  return (
    <div>
       <S.SyledCarrosel >
        {images.map((produto) =>
          imageCarosel(produto.id, produto.imagem)
        )}
      </S.SyledCarrosel>
    </div>
  );
}
