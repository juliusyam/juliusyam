import Image from "next/image";
import JuliusYam from "../JuliusYam";
import {FullPageSlideWrapper} from "../FullPage/FullPageSlideWrapper";

interface LandingInitialSideProps {
  description: string,
  copyright: string,
}

export function LandingInitialSlide({ description, copyright }: LandingInitialSideProps) {

  return (
    <FullPageSlideWrapper dataAnchor="initial">
      <div className="grid place-items-center px-5 md:px-20 w-full h-screen">
        <section className="relative w-full max-w-8xl h-full">
          <div className="absolute bottom-0 left-0 mt-96">
            <Image src="/img/profile.png" layout="intrinsic" objectFit="cover" width="800" height="700" />
          </div>

          <div className="absolute right-0 bottom-1/2 translate-y-1/2">
            <JuliusYam className="text-right text-6xl lg:text-8xl text-right drop-shadow-jy-text lg:drop-shadow-jy-text-xl" />
            <h2 className="font-ocr text-jy-cyan text-md sm:text-2xl text-right">{ description }</h2>
          </div>

          <h5 className="font-ocr text-gray-400 text-xs text-right bottom-5 md:bottom-20 right-0 absolute w-80">
            { copyright }
          </h5>
        </section>
      </div>
    </FullPageSlideWrapper>
  )
}