import {LandingSlideContainer} from "../LandingSlideContainer";
import {ImageButton} from "../ImageButton";
import Link from 'next/link';

export function LandingPreviousProjects() {

  return (
    <LandingSlideContainer slideNumber="04" title="Previous projects">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-32 md:mb-0">
        <ImageButton src="/img/web.jpg"
                     onHoverText="Reactive and static sites">
          Web
        </ImageButton>
        <ImageButton src="/img/design.jpg"
                     onHoverText="Publication, social media, professional templates">
          Design
        </ImageButton>
        <div className="hidden md:block" />
        <ImageButton src="/img/mobile.jpg"
                     onHoverText="iOS, Android">
          Mobile
        </ImageButton>
        <ImageButton src="/img/experiment.jpg"
                     onHoverText="Some fun doodles">
          Experimental projects
        </ImageButton>
        <Link href='/digitalArtworks'>
          <ImageButton src="/img/digital-sketch.jpg"
                       onHoverText="Just for fun">
            Digital artwork
          </ImageButton>
        </Link>
      </div>

    </LandingSlideContainer>
  )
}