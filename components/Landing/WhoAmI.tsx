import {LandingSlideContainer} from "../LandingSlideContainer";
import Image from 'next/image';

export function LandingWhoAmI() {

  return (
    <LandingSlideContainer slideNumber="01" title="Who am I?">
      <div className="grid place-items-center bg-blend-overlay relative">

        <div className="grid w-1/2">

          <Image src="/img/keyboard.png" layout="fill" width="800" height="800" />
        </div>

        {/*<div>*/}

        {/*  <div className="absolute bg-jy-cyan w-full h-full top-0 left-0 bg-opacity-80" />*/}
        {/*</div>*/}
      </div>
    </LandingSlideContainer>
  )
}