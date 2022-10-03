import { ReactNode } from 'react';
import {NumberedTitle} from "./NumberedTitle";

export interface LandingSlideContainerProps {
  slideNumber: string,
  title: string,
  children: ReactNode,
  dataAnchor: string,
}

export function LandingSlideContainer({ children, dataAnchor, ...props }: LandingSlideContainerProps) {

  return (
    <div className="section relative h-screen overflow-hidden" data-anchor={ dataAnchor }>
      <div className="grid place-items-center p-5 md:p-20 w-full h-screen overflow-hidden">
        <section className="grid relative w-full max-w-7xl h-full">
          { children }

          <div className="absolute left-0 md:left-auto md:right-0 bottom-0 md:top-0 inline-block h-20">
            <NumberedTitle { ...props } />
          </div>
        </section>
      </div>
    </div>
  )
}
