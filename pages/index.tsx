import type { NextPage } from 'next'
import ReactFullPage from '@fullpage/react-fullpage';
import {LandingInitialSlide} from "../components/Landing";
import {LandingWhoAmI} from "../components/Landing/WhoAmI";
import {LandingMyBelieve} from "../components/Landing/MyBelieve";
import {LandingMyExperience} from "../components/Landing/MyExperience";
import {LandingPreviousProjects} from "../components/Landing/PreviousProjects";
import {Contact} from "../components/Landing/Contact";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {useEffect} from "react";

export async function getStaticProps({ locale }) {
  return {
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const Home: NextPage = () => {

  const { t } = useTranslation('common');

  return (
    <ReactFullPage
      licenseKey={ process.env.NEXT_PUBLIC_FULL_PAGE_KEY }
      render={() => (
          <ReactFullPage.Wrapper>
            <LandingInitialSlide copyright="ss" description={ t('initial_description') } />

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
