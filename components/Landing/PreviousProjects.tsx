import {LandingSlideContainer} from "../LandingSlideContainer";
import {ImageButton} from "../ImageButton";
import {useTranslation} from "react-i18next";
import {Namespace} from "../../utilities/locales";
import { Routes } from "../../utilities/routes";
import { useRouter } from 'next/router';

export function LandingPreviousProjects() {

  const { t } = useTranslation([Namespace.common, Namespace.landing]);
  const { push } = useRouter();

  return (
    <LandingSlideContainer slideNumber="04"
                           title={ t('previous_projects', { ns: Namespace.landing }) }
                           dataAnchor="previous-projects">

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-32 md:mb-0">
        <ImageButton src="/img/web.jpg"
                     onClick={ () => push(Routes.webs) }
                     onHoverText={ t('web.description') }>
          { t('web.title') }
        </ImageButton>
        <ImageButton src="/img/design.jpg"
                     onHoverText={ t('design.description') }>
          { t('design.title') }
        </ImageButton>
        <div className="hidden md:block" />
        <ImageButton src="/img/mobile.jpg"
                     onHoverText={ t('mobile.description') }>
          { t('mobile.title') }
        </ImageButton>
        <ImageButton src="/img/experiment.jpg"
                     onHoverText={ t('experimental_projects.description') }>
          { t('experimental_projects.title') }
        </ImageButton>
        <ImageButton src="/img/digital-sketch.jpg"
                     onClick={ () => push(Routes.digitalArtworks) }
                     onHoverText={ t('digital_artwork.description') }>
          { t('digital_artwork.title') }
        </ImageButton>
      </div>

    </LandingSlideContainer>
  )
}