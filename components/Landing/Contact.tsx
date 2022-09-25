import {LandingSlideContainer} from "../LandingSlideContainer";
import Image from 'next/image';
import { SocialButton, Social } from '../SocialButton';

export function Contact() {

  return (
    <LandingSlideContainer slideNumber="05" title="Contact me">
      <div className="grid justify-start h-full overflow-hidden">
        <div className="grid h-full relative">
          <Image src='/img/julius-yam.png'
                 width="600"
                 height="100%"
                 objectFit="contain" />


          <div className="grid grid-cols-1 absolute -right-16 top-0">
            <SocialButton href="https://instagram.com/juliusyam"
                          social={ Social.instagram } />
            <SocialButton href="https://linkedin.com/in/juliusyam"
                          social={ Social.linkedin } />
          </div>
        </div>
      </div>
    </LandingSlideContainer>
  )
}
