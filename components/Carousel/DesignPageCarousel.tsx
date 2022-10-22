import {FullPageSlideWrapper} from "../FullPage/FullPageSlideWrapper";
import {Carousel} from "./index";
import {DesignImageItem} from "../../models/apiModels";
import Image from "next/image";

interface DesignPageCarouselProps {
  products: DesignImageItem[],
}

export function DesignPageCarousel({ products }: DesignPageCarouselProps) {

  return (
    <FullPageSlideWrapper dataAnchor="products">
      <div>
        <Carousel interval={ 2000 } loop={ true } autoPlay={ true }>
          {
            products.map((product, i) => (
              <img src={ product.attributes.image.data.attributes.url }
                   className="w-full h-full"
                   draggable={ false }
                   key={ i }
                   alt={ product.attributes.title } />
            ))
          }
        </Carousel>
      </div>
    </FullPageSlideWrapper>
  )
}