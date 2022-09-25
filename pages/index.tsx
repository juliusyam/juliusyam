import type { NextPage } from 'next'
import ReactFullPage from '@fullpage/react-fullpage';
import {LandingInitialSlide} from "../components/Landing";
import {LandingWhoAmI} from "../components/Landing/WhoAmI";
import {LandingMyBelieve} from "../components/Landing/MyBelieve";
import {LandingMyExperience} from "../components/Landing/MyExperience";
import {LandingPreviousProjects} from "../components/Landing/PreviousProjects";
import {Contact} from "../components/Landing/Contact";

const Home: NextPage = () => {

  return (
    <ReactFullPage
      licenseKey={ process.env.NEXT_PUBLIC_FULL_PAGE_KEY }
      render={() => (
          <ReactFullPage.Wrapper>
            <LandingInitialSlide />

            <LandingWhoAmI />

            <LandingMyBelieve />

            <LandingMyExperience />

            <LandingPreviousProjects />

            <Contact />
          </ReactFullPage.Wrapper>
        )
      }
    />
  )
}

export default Home
