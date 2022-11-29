import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IProduto, ProdutoEntity } from "../../types/product.types";
import { ProductCard } from "../ProductCard";

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

interface ArrayType {
  id: number,
    nome: string;
    destaque: boolean;
    imagemUrl: string;
    valor: number;
}

interface ICarouselProps {
  produtos: ArrayType[];
}

export function DetailedCarousel({produtos}: ICarouselProps) {
  return (
    <div>
      <Carousel responsive={responsive}>
        {produtos?.map((item) => (
          <ProductCard
            id={item.id}
            name={item.nome}
            destaque={item.destaque}
            image={item.imagemUrl}
            price={item.valor}
          />
        ))}
      </Carousel>
    </div>
  );
}
