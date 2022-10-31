import { ReactNode } from 'react';
import {NumberedTitle} from "./NumberedTitle";
import {FullPageSlideWrapper} from "./FullPage/FullPageSlideWrapper";
import {AnimatePresence, motion} from "framer-motion";

export interface LandingSlideContainerProps {
  slideNumber: string,
  title: string,
  children: ReactNode,
  dataAnchor: string,
}

export function LandingSlideContainer({ children, dataAnchor, ...props }: LandingSlideContainerProps) {

  return (
    <FullPageSlideWrapper className="overflow-hidden" dataAnchor={ dataAnchor }>
      <AnimatePresence>
        <motion.div className="grid place-items-center p-5 md:p-20 w-full h-screen overflow-hidden"
                    initial={ { opacity: 0 } }
                    whileInView={ { opacity: 1 } }
                    transition={ { ease: 'linear', delay: 0.2 } }
                    key={ dataAnchor }>
          <section className="grid relative w-full max-w-7xl h-full">
            { children }

            <div className="absolute left-0 md:left-auto md:right-0 bottom-0 md:top-0 inline-block h-20">
              <NumberedTitle { ...props } />
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </FullPageSlideWrapper>
  )
}
