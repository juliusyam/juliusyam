import { LandingSlideContainer } from '../LandingSlideContainer';
import { ImageButton } from '../ImageButton';

export function LandingMyExperience() {

  return (
    <LandingSlideContainer slideNumber="03" title="My experience">
      <div className="grid">
        <div className="grid w-1/2 grid-cols-1 gap-8">
          <ImageButton src="/img/handshake.png"
                       onHoverText="Great clients that enable great products!">
            Previous clients
          </ImageButton>
          <ImageButton src="/img/stack.jpg"
                       onHoverText="My go-to and familiar technologies">
            My tech stack
          </ImageButton>
        </div>

      </div>
    </LandingSlideContainer>
  )
}