import { LandingSlideContainer } from '../LandingSlideContainer';
import Image from 'next/image';

export function LandingMyBelieve() {

  return (
    <LandingSlideContainer slideNumber="02" title="My believe">
      <div className="grid items-center">

        <div className="grid w-40 md:w-80 relative h-2/3 md:h-full">

          <Image src="/img/scribbling.png" objectFit="cover" width="800" height="800" />
          <div className="absolute bg-jy-lime w-full h-full bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-opacity-80" />
        </div>

        <h4 className="font-tomorrow absolute top-60 md:top-40 lg:top-20 left-20 lg:left-52 text-1xl md:text-3xl w-2/3 lg:w-1/3 drop-shadow-text">
          Design is a function that transcends practicality into the world of beauty. The idea of a design focused software developer is to create bespoke software products that converts functionality into aesthetics and usability, whilst devising a design language uniquely tailored to each client, and ultimately transform unimaginable ideas to life.
        </h4>
      </div>
    </LandingSlideContainer>
  )
}