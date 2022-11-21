import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Key } from "react";
import * as S from "./styles"

import { Height } from "@mui/icons-material";

const produtos = [
  {
    id: "01",
    imagem:
    "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg", 

  },
  {
    id: "02",
    imagem:
    "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
  },
  {
    id: "03",
    imagem:
    "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",

  },
  {
    id: "04",
    imagem:
    "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
 
  }
];

const imageCarosel = function ( id: string, urlText: string | undefined) {
  return <img id={id} style={{ backgroundSize :'cover', width : '80%', height : '300px'}}  src={urlText} key={id} />   ;
};

export function CarouselSmaller() {
  return (
    <div>
      
       <S.SyledCarrosel >
        {produtos.map((produto) =>
          imageCarosel(produto.id, produto.imagem,)
        )}
      </S.SyledCarrosel>
    </div>
  );
}
