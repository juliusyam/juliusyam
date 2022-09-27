import {LandingSlideContainer} from "../LandingSlideContainer";
import Image from 'next/image';

interface LandingWhoAmIProps {
  title: string,
  introduction: string,
}

export function LandingWhoAmI({ title, introduction }: LandingWhoAmIProps) {

  return (
    <LandingSlideContainer slideNumber="01" title={ title } dataAnchor="who-am-i">
      <div className="grid place-items-center relative">

        <div className="grid w-3/4 md:w-2/3">

          <Image src="/img/keyboard.png" layout="intrinsic" width="800" height="800" objectFit="cover" />
          <div className="absolute bg-jy-cyan w-3/4 md:w-2/3 aspect-square bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-opacity-80" />
        </div>

        <h4 className="font-tomorrow absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-center text-2xl md:text-3xl lg:text-5xl w-full">
          { introduction }
        </h4>
      </div>
    </LandingSlideContainer>
  )
}