import {useEffect} from "react";

export function useAppHeight() {

  useEffect(() => {
    const nextJsContainer = document?.getElementById('__next');

    const appHeight = () => {
      if (nextJsContainer) nextJsContainer.style.setProperty('--vh', `${window.innerHeight}px`);
    }

    if (document.readyState === 'complete') appHeight();

    window.addEventListener('load', appHeight);
    window.addEventListener('resize', appHeight);

    return () => {
      window.removeEventListener('load', appHeight);
      window.removeEventListener('resize', appHeight);
    }
  });
}