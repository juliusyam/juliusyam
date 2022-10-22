import {ChildrenProps} from "../../models";
import {animate, PanInfo, useMotionValue} from "framer-motion";
import {useRef, useState, Children, useEffect} from "react";
import {Slide} from "./Slide";

interface CarouselProps extends ChildrenProps {
  interval: number,
  loop: boolean,
  autoPlay: boolean,
}

export function Carousel({ interval = 2000, loop = true, autoPlay = true, children: child }: CarouselProps) {

  const motionValue = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const [selectedIdx, setSelectedIdx] = useState(0);

  const clientWidth = (ref.current?.clientWidth || 0);

  const newMotionValue = -selectedIdx * clientWidth;

  const handleDragEnd = (e: Event, dragProps: PanInfo) => {
    const { offset: { x: offsetX } } = dragProps;

    if (offsetX > clientWidth / 4) {
      goToPrev();
    } else if (offsetX < -clientWidth / 4) {
      goToNext();
    } else {
      animate(motionValue, newMotionValue, {
        type: 'spring',
        bounce: 0,
      })
    }
  }

  const children = Children.toArray(child)

  const goToPrev = () => {
    const idx = loop ? 0 : selectedIdx;
    setSelectedIdx(selectedIdx - 1 < 0 ? idx : selectedIdx - 1);
  }

  const goToNext = () => {
    const idx = loop ? children.length - 1 : 0;
    setSelectedIdx(selectedIdx - 1 < 0 ? idx : selectedIdx - 1);
  }

  useEffect(() => {
    if (!autoPlay) {
      return
    }

    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [goToNext, interval]);

  return (
    <div ref={ ref }>
      {
        children.map((child, index) => (
          <Slide onDragEnd={ handleDragEnd } motionValue={ motionValue } index={ index }>
            { child }
          </Slide>
        ))
      }
    </div>
  )
}