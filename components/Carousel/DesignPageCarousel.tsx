import {FullPageSlideWrapper} from "../FullPage/FullPageSlideWrapper";
import {DesignImageItem} from "../../models/apiModels";
import {CarouselImage, ImageCarousel} from "./index";

interface DesignPageCarouselProps {
  products: DesignImageItem[],
}

export function DesignPageCarousel({ products }: DesignPageCarouselProps) {

  const images: CarouselImage[] = products.reduce<CarouselImage[]>((all, each) => {

    const { id, attributes: { title, description, image } } = each;

    all.push({ id, title, description, src: image.data.attributes.url });
    return all;
  }, []);

  return (
    <FullPageSlideWrapper dataAnchor="products">
      <ImageCarousel images={ images } />
    </FullPageSlideWrapper>
  )
}