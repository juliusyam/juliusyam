import type { NextPage } from 'next'
import ReactFullpage from '@fullpage/react-fullpage';
import {LandingSlideContainer} from "../components/LandingSlideContainer";
import {LandingInitialSlide} from "../components/Landing";
import {LandingWhoAmI} from "../components/Landing/WhoAmI";
import {LandingMyBelieve} from "../components/Landing/MyBelieve";
import {LandingMyExperience} from "../components/Landing/MyExperience";
import {LandingPreviousProjects} from "../components/Landing/PreviousProjects";

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

            <LandingMyExperience />

            <LandingPreviousProjects />

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
