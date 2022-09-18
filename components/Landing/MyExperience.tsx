import { LandingSlideContainer } from '../LandingSlideContainer';
import { ImageButton } from '../ImageButton';
import Link from 'next/link';

export function LandingMyExperience() {

  return (
    <LandingSlideContainer slideNumber="03" title="My experience">
      <div className="grid w-1/2 grid-cols-1 gap-8">
        <Link href='/clients'>
          <ImageButton src="/img/handshake.png"
                       onHoverText="Great clients that enable great products!">
            Previous clients
          </ImageButton>
        </Link>
        <Link href='/techStacks'>
          <ImageButton src="/img/stack.jpg"
                       onHoverText="My go-to and familiar technologies">
            My tech stack
          </ImageButton>
        </Link>
      </div>
    </LandingSlideContainer>
  )
}