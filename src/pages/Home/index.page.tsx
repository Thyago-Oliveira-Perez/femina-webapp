import * as S from "./styles";
import { Header } from "../../components/Global/Header";
import { CardProduct } from "../../components/Generic/CardProduct";
import {Modal} from '../../components/Generic/Modal'
import {ButtonComponent} from '../../components/Generic/Button'
import { useState } from "react";

export function HomePage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <CardProduct
        productPhoto="http://i.ytimg.com/vi/ngElkyQ6Rhs/hqdefault.jpg"
        name="Star wars"
        price={200}
        productPhotoDescription="Star Wars"
      />

      <ButtonComponent onClick={() => setOpenModal(true)}/>

      <Modal open={openModal} onClose={() => setOpenModal(false)}></Modal>
    </>
  );
}
