import * as S from './styles';
import { useState } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { CarouselComponent } from '../../components/Carousel';

export function Produtos() {


    const produtos = [
        {
            id: 0o1,
            nome: "aaaaa",
            imagem: "https://tm.ibxk.com.br/2021/09/02/02122234915186.jpg",
            price: 100,
            destaque: true
        },
        {
            id: 0o2,
            nome: "aaaaa",
            imagem: "https://tm.ibxk.com.br/2021/09/02/02122234915186.jpg",
            price: 100,
            destaque: true
        },
        {
            id: 0o3,
            nome: "aaaaa",
            imagem: "https://tm.ibxk.com.br/2021/09/02/02122234915186.jpg",
            price: 100,
            destaque: true
        },
        {
            id: 0o4,
            nome: "aaaaa",
            imagem: "https://tm.ibxk.com.br/2021/09/02/02122234915186.jpg",
            price: 100,
            destaque: true
        },
        {
            id: 0o5,
            nome: "aaaaa",
            imagem: "https://tm.ibxk.com.br/2021/09/02/02122234915186.jpg",
            price: 100,
            destaque: false
        },
        {
            id: 0o5,
            nome: "aaaaa",
            imagem: "https://tm.ibxk.com.br/2021/09/02/02122234915186.jpg",
            price: 100,
            destaque: false
        },
        {
            id: 0o5,
            nome: "aaaaa",
            imagem: "https://tm.ibxk.com.br/2021/09/02/02122234915186.jpg",
            price: 100,
            destaque: false
        },
        {
            id: 0o5,
            nome: "aaaaa",
            imagem: "https://tm.ibxk.com.br/2021/09/02/02122234915186.jpg",
            price: 100,
            destaque: false
        },
        {
            id: 0o5,
            nome: "aaaaa",
            imagem: "https://tm.ibxk.com.br/2021/09/02/02122234915186.jpg",
            price: 100,
            destaque: false
        },
        {
            id: 0o5,
            nome: "aaaaa",
            imagem: "https://tm.ibxk.com.br/2021/09/02/02122234915186.jpg",
            price: 100,
            destaque: false
        },
    ]

    var items = [
        {
            name: "Femina",
            img_src: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
            url: "",
        },
        {
            name: "",
            img_src: "https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp",
            url: "",
        },
        {
            name: "teste",
            img_src: "https://picsum.photos/1024/480/?image=54",
            url: "",
        },
    ];

    return (
        <div>

            <CarouselComponent buttonEnabled={true} listItems={items} />

            <S.ProductContainer>
                {produtos.map((produto) => (
                    produto.destaque == true && (
                        <ProductCard
                            name={produto.nome}
                            destaque={produto.destaque}
                            image={produto.imagem}
                            price={produto.price}
                            key={produto.id}
                        />
                    )

                ))}
            </S.ProductContainer>

            <CarouselComponent buttonEnabled={true} listItems={items} />

            <S.ContainerGrid>
                <S.StyledH3>Nossos produtos</S.StyledH3>
                <S.GridPorduct>
                    {produtos.map((produto) => (
                        produto.destaque == false && (
                            <ProductCard
                                name={produto.nome}
                                destaque={produto.destaque}
                                image={produto.imagem}
                                price={produto.price}
                                key={produto.id}
                            />
                        )
                    ))}
                </S.GridPorduct>
            </S.ContainerGrid>

        
        </div>
    );
}