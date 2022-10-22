import {ChildrenProps} from "../../models";
import {animate, PanInfo, useMotionValue} from "framer-motion";
import {useRef, useState, Children, useEffect} from "react";
import {Slide} from "./Slide";
import {useCarousel} from "../../hooks/useCarousel";

interface CarouselProps extends ChildrenProps {
  interval: number,
  loop: boolean,
  autoPlay: boolean,
}

export function Carousel({ interval, loop, autoPlay, children: child }: CarouselProps) {

  const children = Children.toArray(child);

  const { ref, motionValue, dragEvent } = useCarousel({
    quantity: children.length,
    config: {interval, loop, autoPlay },
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