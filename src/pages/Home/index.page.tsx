import * as S from "./styles";
import { Header } from "../../components/Global/Header";
import { CardProduct } from "../../components/Generic/CardProduct";

export function HomePage() {
  return (
    <>
      <CardProduct
        productPhoto="http://i.ytimg.com/vi/ngElkyQ6Rhs/hqdefault.jpg"
        name="Star wars"
        price={200}
        productPhotoDescription="Star Wars"
      />
    </>
  );
}
