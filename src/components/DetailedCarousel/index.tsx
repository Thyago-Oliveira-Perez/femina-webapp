import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductCard } from "../ProductCard";
import * as S from "./styles";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const produtos = [
  {
    id: 0o1,
    nome: "aaaaa",
    imagem:
      "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
    price: 100,
    destaque: true,
  },
  {
    id: 0o5,
    nome: "aaaaa",
    imagem:
      "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
    price: 100,
    destaque: true,
  },
  {
    id: 0o5,
    nome: "aaaaa",
    imagem:
      "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
    price: 100,
    destaque: true,
  },
  {
    id: 0o1,
    nome: "aaaaa",
    imagem:
      "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
    price: 100,
    destaque: true,
  },
  {
    id: 0o5,
    nome: "aaaaa",
    imagem:
      "https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg",
    price: 100,
    destaque: true,
  },
];


const CarouselInternalState = [
  {
    itemWidth: 0,
    containerWidth: 0,
    slidesToShow: 4,
    currentSlide: 1,
    totalItems: 10,
    domLoaded: true,
    deviceType: "",
    transform: 1,
  }
];

export function DetailedCarousel() {
  return (
    <div>
      <Carousel  
      
      responsive={responsive}
     >
        <ProductCard
          name="nome"
          destaque={true}
          image="https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg"
          price={100}
        />
        <ProductCard
          name="nome"
          destaque={true}
          image="https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg"
          price={100}
        />
         <ProductCard
        name="nome"
        destaque={true}
        image="https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg"
        price={100}
      />
      <ProductCard
        name="nome"
        destaque={true}
        image="https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg"
        price={100}
      />
      <ProductCard
        name="nome"
        destaque={true}
        image="https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg"
        price={100}
      />
      <ProductCard
        name="nome"
        destaque={true}
        image="https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg"
        price={100}
      />
      <ProductCard
        name="nome"
        destaque={true}
        image="https://i.pinimg.com/564x/ed/25/15/ed2515babd9b38b97509a7c2b7db1366.jpg"
        price={100}
      />
      </Carousel>
     
    </div>
  );
}
