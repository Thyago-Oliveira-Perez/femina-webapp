import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU",
    price: 100,
    destaque: true,
  },
  {
    id: 0o5,
    nome: "aaaaa",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU",
    price: 100,
    destaque: true,
  },
  {
    id: 0o1,
    nome: "aaaaa",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU",
    price: 100,
    destaque: true,
  },
  {
    id: 0o5,
    nome: "aaaaa",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU",
    price: 100,
    destaque: true,
  },
];

export function DetailedCarousel() {
  return (
    <div>
      <Carousel responsive={responsive}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" />
        </div>
      </Carousel>
    </div>
  );
}
