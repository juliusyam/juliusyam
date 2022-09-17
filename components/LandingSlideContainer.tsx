import { ReactNode } from 'react';
import {NumberedTitle} from "./NumberedTitle";

export interface LandingSlideContainerProps {
  slideNumber: string,
  title: string,
  children: ReactNode
}

export function LandingSlideContainer({ children, ...props }: LandingSlideContainerProps) {

  return (
    <div className="section relative h-screen">
      <div className="grid place-items-center p-5 md:p-20 w-full h-screen">
        <section className="grid relative w-full max-w-7xl h-full">
          { children }

          <div className="absolute left-0 md:right-0 bottom-0 md:top-0 inline-block h-20">
            <NumberedTitle { ...props } />
          </div>
        </section>
      </div>
    </div>
  )
}
