import Image from "next/image";
import JuliusYam from "../JuliusYam";

interface LandingInitialSideProps {
  description: string,
  copyright: string,
}

export function LandingInitialSlide({ description, copyright }: LandingInitialSideProps) {

  return (
    <div className="section relative h-screen">
      <div className="grid place-items-center px-5 md:px-20 w-full h-screen">
        <section className="relative w-full max-w-9xl h-full">
          <div className="absolute bottom-0 left-0 mt-96">
            <Image src="/img/profile.png" layout="intrinsic" objectFit="cover" width="800" height="700" />
          </div>

          <div className="absolute right-0 bottom-1/2 translate-y-1/2">
            <JuliusYam textAlign="text-right" fontSize="text-3xl md:text-5xl lg:text-8xl text-right" />
            <h2 className="font-ocr text-jy-cyan text-2xl text-right">{ description }</h2>
          </div>

          <h5 className="font-ocr text-gray-400 text-1xl text-right bottom-20 right-0 absolute w-80">
            { copyright }
          </h5>
        </section>
      </div>
    </div>
  )
}