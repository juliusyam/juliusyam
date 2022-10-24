import { useState, useEffect } from "react";
import { Dict } from '../models';

interface Viewport {
  width: number;
  height: number;
}

interface ViewportAndViews {
  viewport: Viewport,
  views: Dict<boolean>;
}

export enum Width {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  xl2 = 1536,
}

export function useViewport(): ViewportAndViews {
  const [viewport, setViewport] = useState<Viewport>({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    if (document.readyState === 'complete') handleResize();

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const { width } = viewport;

  const views: Dict<boolean> = {
    sm: width < Width.sm,
    md: width < Width.lg,
    lg: width < Width.lg,
    xl: width < Width.xl,
    xl2: width < Width.xl2,
  };

  return { viewport, views };
}