import type {GetStaticProps, NextPage} from 'next'
import ReactFullPage from '@fullpage/react-fullpage';
import {LandingInitialSlide} from "../components/Landing";
import {LandingWhoAmI} from "../components/Landing/WhoAmI";
import {LandingMyBelieve} from "../components/Landing/MyBelieve";
import {LandingMyExperience} from "../components/Landing/MyExperience";
import {LandingPreviousProjects} from "../components/Landing/PreviousProjects";
import {Contact} from "../components/Landing/Contact";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig } from 'next-i18next';
import {Dict} from "../models";
import i18next from 'i18next';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

interface HomePageProps extends SSRConfig {
}

export const getStaticProps: GetStaticProps<SSRConfig> = async ({ locale }) => {
  return {
    props: {
        ...(await serverSideTranslations(locale as string, ['common', 'landing'])),
    },
  };
}

const Home: NextPage<HomePageProps> = ({ _nextI18Next }) => {

  const { initialI18nStore, initialLocale } = _nextI18Next;
  const { t } = useTranslation(['common']);

  const landingKeys = initialI18nStore[initialLocale].landing as Dict<string>;

  return (
    <ReactFullPage
      licenseKey={ process.env.NEXT_PUBLIC_FULL_PAGE_KEY }
      render={() => (
          <ReactFullPage.Wrapper>
            <LandingInitialSlide
              copyright={ t('copyright', {
                year: dayjs().year().toString()
              }) }
              description={ landingKeys.initial_description }
            />

            <LandingWhoAmI title={ landingKeys.who_am_i } introduction={ landingKeys.introduction } />

            <LandingMyBelieve title={ landingKeys.my_believe } believe={ landingKeys.believe } />

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
