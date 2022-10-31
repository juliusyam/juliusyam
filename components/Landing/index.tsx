import Image from "next/image";
import JuliusYam from "../JuliusYam";
import {FullPageSlideWrapper} from "../FullPage/FullPageSlideWrapper";
import {useAnimation, useInView, motion, AnimatePresence} from "framer-motion";
import {useRef} from "react";

interface LandingInitialSideProps {
  description: string,
  copyright: string,
}

export function LandingInitialSlide({ description, copyright }: LandingInitialSideProps) {

  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);

  const containerAnimate = useAnimation();
  const titleAnimate = useAnimation();
  const descriptionAnimate = useAnimation();

  if(inView) {
    containerAnimate.start({
      scale: 1,
      opacity: 1,
      right: 0,
      translateX: 0,
      translateY: '50%',
      transition: {
        scale: {
          duration: 1.5,
          type: 'spring',
          damping: 1.3,
          mass: 0.5,
          stiffness: 70,
        },
        opacity: {
          duration: 2,
        },
        right: {
          delay: 2,
          duration: 1,
        },
        translateX: {
          delay: 2,
          duration: 1,
        }
      }
    });
    titleAnimate.start({
      textAlign: 'right',
    });
    descriptionAnimate.start({
      textAlign: 'right',
    })
  } else {
    containerAnimate.start({
      opacity: 0,
    });
  }

  return (
    <FullPageSlideWrapper dataAnchor="initial">
      <AnimatePresence>
        <div className="grid place-items-center px-5 md:px-20 w-full h-screen" ref={ ref }>
          <section className="relative w-full max-w-8xl h-full">
            <motion.div className="absolute bottom-0 left-0 mt-96"
                        initial={ { opacity: 0 } }
                        whileInView={ { opacity: 1 } }
                        transition={ { ease: 'easeIn', delay: 2.5, duration: 2 } }>
              <Image src="/img/profile.png" layout="intrinsic" objectFit="cover" width="800" height="700" />
            </motion.div>

            <motion.div className="absolute bottom-1/2 translate-y-1/2"
                        initial={ { scale: 0.9, opacity: 0, right: '50%', translateX: '50%', translateY: '50%' } }
                        animate={ containerAnimate }>
              <motion.h1 className="font-ocr uppercase text-6xl lg:text-8xl drop-shadow-jy-text lg:drop-shadow-jy-text-xl"
                         initial={ { textAlign: 'center' } }
                         transition={ { ease: 'easeInOut', delay: 2, duration: 1 } }
                         animate={ titleAnimate }>
                Julius Yam
              </motion.h1>
              <motion.h2 className="font-ocr text-jy-cyan text-md sm:text-2xl"
                         initial={ { textAlign: 'center' } }
                         transition={ { ease: 'easeInOut', delay: 2, duration: 1 } }
                         animate={ descriptionAnimate }>
                { description }
              </motion.h2>
            </motion.div>

            <motion.h5 className="font-ocr text-gray-400 text-xs text-right bottom-5 md:bottom-20 right-0 absolute w-80"
                       initial={ { opacity: 0 } }
                       whileInView={ { opacity: 1 } }
                       transition={ { ease: 'easeIn', delay: 2.5, duration: 2 } }>
              { copyright }
            </motion.h5>
          </section>
        </div>
      </AnimatePresence>
    </FullPageSlideWrapper>
  )
}