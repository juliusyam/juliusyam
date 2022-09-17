import type { NextPage } from 'next'
import ReactFullpage from '@fullpage/react-fullpage';
import {LandingSlideContainer} from "../components/LandingSlideContainer";
import {LandingInitialSlide} from "../components/Landing";
import {LandingWhoAmI} from "../components/Landing/WhoAmI";
import {LandingMyBelieve} from "../components/Landing/MyBelieve";

const Home: NextPage = () => {

  return (
    <ReactFullpage
      navigation
      licenseKey={ process.env.NEXT_PUBLIC_FULL_PAGE_KEY }
      render={() => (
          <ReactFullpage.Wrapper>
            <LandingInitialSlide />

            <LandingWhoAmI />

            <LandingMyBelieve />

            <LandingSlideContainer slideNumber="03" title="My experience">
              <h1>content goes here</h1>
            </LandingSlideContainer>

            <LandingSlideContainer slideNumber="04" title="Previous projects">
              <h1>content goes here</h1>
            </LandingSlideContainer>

            <LandingSlideContainer slideNumber="05" title="Contact me">
              <h1>content goes here</h1>
            </LandingSlideContainer>
          </ReactFullpage.Wrapper>
        )
      }
    />
  )
}

export default Home
