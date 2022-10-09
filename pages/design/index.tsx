import {GetStaticProps, NextPage} from "next";
import {PortfolioPageContainer} from "../../components/Portfolio/PortfolioPageContainer";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Namespace} from "../../utilities/locales";
import {Dict} from "../../models";
import {SSRConfig} from "next-i18next";
import {Design} from "../../models/apiModels";
import {DesignItem} from "../../components/Portfolio/Item/Design";
import {getDesigns} from "../../services/ApiRoutes";

interface DesignsProps extends SSRConfig {
  designs: Design[],
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {

  return {
    props: {
      designs: await getDesigns(),
      ...(await serverSideTranslations(locale as string, [Namespace.common])),
    }
  }
}

const Designs: NextPage<DesignsProps> = ({ _nextI18Next, designs }) => {

  const { initialI18nStore, initialLocale } = _nextI18Next;

  const keys = initialI18nStore[initialLocale].common as Dict<any>;

  return (
    <PortfolioPageContainer title={ keys.design.title }
                            backgroundColor="bg-jy-green"
                            backgroundSrc="/img/design.jpg">
      <>
        {
          designs.map(design =>
            <DesignItem design={ design } />
          )
        }
      </>
    </PortfolioPageContainer>
  )
}

export default Designs