import { LandingSlideContainer } from '../LandingSlideContainer';
import { ImageButton } from '../ImageButton';
import Link from 'next/link';
import Image from "next/image";
import {ClassNameProps} from "../../models";
import {useTranslation} from "react-i18next";
import {Namespace} from "../../utilities/locales";
import {Routes} from "../../utilities/routes";

export function LandingMyExperience() {

  const { t } = useTranslation([Namespace.common, Namespace.landing]);

  return (
    <LandingSlideContainer slideNumber="03" title={ t('my_experience', { ns: Namespace.landing }) } dataAnchor="my-experience">
      <div className="grid w-full md:w-1/2 grid-cols-1 gap-8 relative mb-64 md:mb-0">

        <div className="absolute left-5 md:left-32 top-20 md:top-10 w-full h-full">
          <Image src="/img/scribbling.png" layout="fill" objectFit="cover" />

          <div className="absolute top-0 left-0 bg-jy-cyan w-full h-full bg-opacity-95" />

          <CaseyNeistatQuote className="absolute right-0 md:-right-2/3 -bottom-20 md:bottom-20 w-full md:w-2/3" />
        </div>

        <Link href={ Routes.clients }>
          <ImageButton src="/img/handshake.png"
                       onHoverText={ t('previous_clients.description') }>
            { t('previous_clients.title') }
          </ImageButton>
        </Link>
        <Link href={ Routes.techStack }>
          <ImageButton src="/img/stack.jpg"
                       onHoverText={ t('tech_stack.description') }>
            { t('tech_stack.title') }
          </ImageButton>
        </Link>

      </div>
    </LandingSlideContainer>
  )
}

export function CaseyNeistatQuote(props: ClassNameProps) {

  return (
    <div { ...props }>
      <h5 className="font-tomorrow drop-shadow-text text-lg md:text-3xl mb-5">
        “If you’re doing it the way that everyone else is doing it, you’re doing it wrong”
      </h5>

      <h5 className="font-tomorrow drop-shadow-text text-lg md:text-3xl">- Casey Neistat, 2015</h5>
    </div>
  )
}