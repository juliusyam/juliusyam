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
  SmallPhone = 350,
  Phone = 600,
  SmallTablet = 992,
  LargeTablet = 1200,
  NarrowDesktop = 1400,
  Desktop = 1600,
}

export function useViewport(): ViewportAndViews {
  const [viewport, setViewport] = useState<Viewport>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleResize() {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width } = viewport;

  const views: Dict<boolean> = {
    smallMobile: width <= Width.SmallPhone,
    mobile: width <= Width.Phone,
    smallTablet: width <= Width.SmallTablet,
    largeTablet: width <= Width.LargeTablet,
    narrowDesktop: width <= Width.NarrowDesktop,
    desktop: width <= Width.Desktop,
  };

  return { viewport, views };
}