import {LandingSlideContainer} from "../LandingSlideContainer";
import Image from 'next/image';
import { SocialButton, Social } from '../SocialButton';
import {ClassNameProps} from "../../models";
import {useTranslation} from "react-i18next";
import {Namespace} from "../../utilities/locales";

export function Contact() {

  const { t } = useTranslation([Namespace.common, Namespace.landing]);

  return (
    <LandingSlideContainer slideNumber="05"
                           title={ t('contact_me', { ns: Namespace.landing }) }
                           dataAnchor="contact-me">

      <div className="grid justify-start h-full overflow-hidden">
        <div className="grid mr-32 relative mb-32 md:mb-0">
          <Image src='/img/julius-yam.png'
                 width="600"
                 height="100%"
                 objectFit="contain" />

          <div className="grid grid-cols-1 absolute -right-16 top-1/2 sm:top-auto bottom-auto sm:bottom-24 xl:top-0 xl:bottom-auto">
            <SocialButton href="https://linkedin.com/in/juliusyam"
                          hoverColor="text-jy-cyan"
                          social={ Social.linkedin } />
          </div>

          <Email className="absolute left-0 md:left-1/2 bottom-16" />
        </div>
      </div>
    </LandingSlideContainer>
  )
}

export function Email(props: ClassNameProps) {

  return (
    <a href="mailto:juliusworldwide@gmail.com" { ...props }>
      <h5 className="font-ocr drop-shadow-text break-all md:break-normal text-lg md:text-xl hover:text-jy-cyan transition ease-in-out duration-500">
        juliusworldwide@gmail.com
      </h5>
    </a>
  )
}
