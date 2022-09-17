import {LandingSlideContainer} from "../LandingSlideContainer";
import Image from 'next/image';

export function LandingWhoAmI() {

  return (
    <LandingSlideContainer slideNumber="01" title="Who am I?">
      <div className="grid place-items-center relative">

        <div className="grid w-3/4 md:w-2/3">

          <Image src="/img/keyboard.png" layout="intrinsic" width="800" height="800" objectFit="cover" />
          <div className="absolute bg-jy-cyan w-3/4 md:w-2/3 aspect-square bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-opacity-80" />
        </div>

        <h4 className="font-tomorrow absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-center text-2xl md:text-3xl lg:text-5xl w-full">
          I am a Manchester based Software Developer for Web and Mobile application, Graphic, Publication, UI and UX Designer.
        </h4>
      </div>
    </LandingSlideContainer>
  )
}