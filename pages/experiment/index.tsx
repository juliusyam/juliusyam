import {GetStaticProps, NextPage} from "next";
import {PortfolioPageContainer} from "../../components/Portfolio/PortfolioPageContainer";
import {SSRConfig} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Namespace} from "../../utilities/locales";
import {Dict} from "../../models";
import {getExperimentalProjects} from "../../services/ApiRoutes";
import {Project} from "../../models/apiModels";

interface ExperimentPageProps extends SSRConfig {
  projects: Project[]
}

export const getStaticProps: GetStaticProps<ExperimentPageProps> = async({ locale }) => {

  return {
    props: {
      projects: await getExperimentalProjects(),
      ...(await serverSideTranslations(locale as string, [Namespace.common])),
    }
  }
}

const ExperimentPage: NextPage<ExperimentPageProps> = ({ _nextI18Next, projects }) => {

  const { initialI18nStore, initialLocale } = _nextI18Next;

  const keys = initialI18nStore[initialLocale].common as Dict<any>;

  return (
    <PortfolioPageContainer title={ keys.experimental_projects.title }
                            backgroundColor="bg-jy-red"
                            backgroundSrc="/img/experiment.jpg"
                            fontSize="text-3xl xl:text-6xl">
      <div />

    </PortfolioPageContainer>
  )
}

export default ExperimentPage