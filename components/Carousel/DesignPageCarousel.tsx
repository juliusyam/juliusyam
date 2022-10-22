import {FullPageSlideWrapper} from "../FullPage/FullPageSlideWrapper";
import {DesignImageItem} from "../../models/apiModels";
import {useCarousel} from "../../hooks/useCarousel";
import {Slide} from "./Slide";
import {CarouselBottomControls} from "./BottomControls";

interface DesignPageCarouselProps {
  products: DesignImageItem[],
}

export function DesignPageCarousel({ products }: DesignPageCarouselProps) {

  const { ref, selectedIdx, motionValue, dragEvent, navigate } = useCarousel({
    quantity: products.length,
    config: {
      interval: 3000,
      loop: true,
      autoPlay: true,
    }
  });

  return (
    <FullPageSlideWrapper dataAnchor="products">
      <div className="relative w-full h-screen overflow-x-hidden flex" ref={ ref }>
        {
          products.map((product, i) => (
            <Slide onDragStart={ dragEvent.handleDragStart }
                   onDragEnd={ dragEvent.handleDragEnd }
                   motionValue={ motionValue }
                   index={ i }
                   key={ i }>

              <img src={ product.attributes.image.data.attributes.url }
                   className="w-full h-[calc(100vh-16rem)] lg:h-[calc(100vh-9rem)] object-cover"
                   draggable={ false }
                   key={ i }
                   alt={ product.attributes.title } />

            </Slide>
          ))
        }

        <CarouselBottomControls title={ products[selectedIdx].attributes.title }
                                description={ products[selectedIdx].attributes.description }
                                onClickLeft={ navigate.toPrevSlide }
                                onClickRight={ navigate.toNextSlide } />
      </div>
    </FullPageSlideWrapper>
  )
}