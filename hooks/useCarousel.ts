import {animate, AnimationOptions, MotionValue, PanInfo, useMotionValue} from "framer-motion";
import {RefObject, useEffect, useRef, useState} from "react";

interface CarouselConfig {
  interval: number,
  loop: boolean,
  autoPlay: boolean,
}

interface CarouselProps {
  quantity: number,
  initialIdx?: number,
  config: CarouselConfig
}

interface CarouselReturnObject {
  ref: RefObject<HTMLDivElement>,
  motionValue: MotionValue<number>,
  selectedIdx: number,
  dragEvent: {
    handleDragStart: () => void,
    handleDragEnd: (e: Event, dragProps: PanInfo) => void,
  },
  navigate: {
    toPrevSlide: () => void,
    toNextSlide: () => void,
  }
}

export function useCarousel({ quantity, initialIdx, config }: CarouselProps): CarouselReturnObject {

  const { interval, loop, autoPlay: initialAutoPlay } = config;

  const motionValue = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(initialAutoPlay);

  const clientWidth = (ref.current?.clientWidth || 0);

  const newMotionValue = -selectedIdx * clientWidth;

  const transition: AnimationOptions<number> = {
    type: 'spring',
    bounce: 0,
  }

  const handleDragStart = () => {
    setAutoPlay(false);
  }

  const handleDragEnd = (e: Event, dragProps: PanInfo) => {
    const { offset: { x: offsetX } } = dragProps;

    if (offsetX > clientWidth / 4) {
      goToPrev();
    } else if (offsetX < -clientWidth / 4) {
      goToNext();
    } else {
      animate(motionValue, newMotionValue, transition)
    }

    if (initialAutoPlay) setAutoPlay(true);
  }

  const goToPrev = () => {
    const idx = loop ? quantity - 1 : 0;
    setSelectedIdx(selectedIdx - 1 < 0 ? idx : selectedIdx - 1);
  }

  const goToNext = () => {
    const idx = loop ? 0 : selectedIdx;
    setSelectedIdx(selectedIdx + 1 === quantity ? idx : selectedIdx + 1);
  }

  useEffect(() => {
    if (initialIdx) setSelectedIdx(initialIdx);
  }, [initialIdx]);

  useEffect(() => {
    const controls = animate(motionValue, newMotionValue, transition);

    return controls.stop;
  }, [selectedIdx]);

  useEffect(() => {
    if (!autoPlay) {
      return
    }

    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);

  }, [interval, goToNext, autoPlay]);

  return {
    ref,
    motionValue,
    selectedIdx,
    dragEvent: { handleDragStart, handleDragEnd },
    navigate: { toNextSlide: goToNext, toPrevSlide: goToPrev },
  }
}