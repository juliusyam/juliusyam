import {ChildrenProps} from "../../models";
import {Children, useEffect} from "react";
import {Slide} from "./Slide";
import {useCarousel} from "../../hooks/useCarousel";
import {CarouselBottomControls} from "./BottomControls";

interface CarouselProps extends ChildrenProps {
  interval: number,
  loop: boolean,
  autoPlay: boolean,
  initialIdx?: number,
}

export function Carousel({ interval, loop, autoPlay, initialIdx, children: child }: CarouselProps) {

  const children = Children.toArray(child);

  const { ref, motionValue, dragEvent } = useCarousel({
    quantity: children.length,
    initialIdx,
    config: { interval, loop, autoPlay },
  });

  return (
    <div className="relative w-full h-screen overflow-x-hidden flex" ref={ ref }>
      {
        children.map((child, i) => (
          <Slide onDragStart={ dragEvent.handleDragStart }
                 onDragEnd={ dragEvent.handleDragEnd }
                 motionValue={ motionValue }
                 index={ i }
                 key={ i }>
            { child }
          </Slide>
        ))
      }
    </div>
  )
}

interface ImageCarouselProps {
  images: CarouselImage[],
  initialIdx?: number,
  onChangeSlide?: (id: number) => void,
}

export interface CarouselImage {
  id: number,
  title: string,
  description: string,
  src: string,
}

export function ImageCarousel({ images, initialIdx, onChangeSlide }: ImageCarouselProps) {

  const { ref, selectedIdx, motionValue, dragEvent, navigate, autoPlay } = useCarousel({
    quantity: images.length,
    initialIdx,
    config: {
      interval: 3000,
      loop: true,
      autoPlay: true,
    }
  });

  useEffect(() => {
    onChangeSlide && onChangeSlide(images[selectedIdx].id);
  }, [selectedIdx]);

  return (
    <div className="relative w-full h-screen overflow-x-hidden flex" ref={ ref }>
      {
        images.map((image, i) => (
          <Slide onDragStart={ dragEvent.handleDragStart }
                 onDragEnd={ dragEvent.handleDragEnd }
                 motionValue={ motionValue }
                 index={ i }
                 key={ i }>

            <img src={ image.src }
                 className="w-full h-[calc(100vh-9rem)] sm:h-[calc(100vh-16rem)] lg:h-[calc(100vh-9rem)] object-cover"
                 draggable={ false }
                 key={ i }
                 alt={ image.title } />

          </Slide>
        ))
      }

      <CarouselBottomControls title={ images[selectedIdx].title }
                              description={ images[selectedIdx].description }
                              onClickLeft={ navigate.toPrevSlide }
                              onClickRight={ navigate.toNextSlide }
                              autoPlay={ autoPlay }
      />
    </div>
  )
}