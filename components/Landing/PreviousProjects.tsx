import {LandingSlideContainer} from "../LandingSlideContainer";
import {ImageButton} from "../ImageButton";
import Link from 'next/link';
import {useTranslation} from "react-i18next";

export function LandingPreviousProjects() {

  const { t } = useTranslation('common');

  return (
    <LandingSlideContainer slideNumber="04" title={ t('previous_projects') } dataAnchor="previous-projects">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-32 md:mb-0">
        <ImageButton src="/img/web.jpg"
                     onHoverText="Reactive and static sites">
          { t('web') }
        </ImageButton>
        <ImageButton src="/img/design.jpg"
                     onHoverText="Publication, social media, professional templates">
          { t('design') }
        </ImageButton>
        <div className="hidden md:block" />
        <ImageButton src="/img/mobile.jpg"
                     onHoverText="iOS, Android">
          { t('mobile') }
        </ImageButton>
        <ImageButton src="/img/experiment.jpg"
                     onHoverText="Some fun doodles">
          { t('experimental_projects') }
        </ImageButton>
        <Link href='/digitalArtworks'>
          <ImageButton src="/img/digital-sketch.jpg"
                       onHoverText="Just for fun">
            { t('digital_artwork') }
          </ImageButton>
        </Link>
      </div>

    </LandingSlideContainer>
  )
}