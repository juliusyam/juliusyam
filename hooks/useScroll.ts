import { useEffect, useRef, useState } from 'react';

enum ScrollDirection {
  up = 'up',
  down = 'down',
}

interface ScrollProps {
  scrollDirection: ScrollDirection,
  componentHeight: number,
  scrollPosition: number,
}

const THRESHOLD = 0;

export function useScroll() {

  const ref = useRef<HTMLDivElement | null>(null);
  const [scrollProps, setScrollProps] = useState<ScrollProps>({
    scrollDirection: ScrollDirection.down,
    componentHeight: 0,
    scrollPosition: 0,
  });

  const prevScrollY = useRef(0);

  const updateScroll = () => {
    const current = ref?.current;
    const scrollY = current?.scrollTop || 0;

    if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
      const newScrollDirection = scrollY > prevScrollY.current ? ScrollDirection.down : ScrollDirection.up;

      const scrollHeight = current?.scrollHeight || 0;
      const clientHeight = current?.clientHeight || 0;

      setScrollProps({
        scrollDirection: newScrollDirection,
        componentHeight: scrollHeight - clientHeight,
        scrollPosition: scrollY,
      });

      prevScrollY.current = scrollY > 0 ? scrollY : 0;
    }
  }

  useEffect(() => {
    const handleScroll = () => window?.requestAnimationFrame(updateScroll);

    ref?.current?.addEventListener('scroll', handleScroll);

    return () => ref?.current?.removeEventListener('scroll', handleScroll);
  }, [scrollProps]);

  return { ref, scrollProps };
}