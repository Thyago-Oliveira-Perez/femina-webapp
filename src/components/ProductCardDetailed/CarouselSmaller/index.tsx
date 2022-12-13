import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import * as S from "./styles"

interface ImageProps {
  images: any[];
  imagemUrl: string;
}

export function CarouselSmaller({ images, imagemUrl }: ImageProps) {
  return (
    <div>
      <S.SyledCarrosel >
        {images
          ? images.map((image, index) => (
            <img
              key={index}
              src={`${imagemUrl}/${image}`}
              style={{ backgroundSize: 'cover', width: '80%', height: '300px' }}
            />)) : []
        }
      </S.SyledCarrosel>
    </div>
  );
}
