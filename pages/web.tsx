import {GetStaticProps, NextPage} from 'next';
import {apiService} from '../services/ApiService';
import {Web} from "../models/apiModels";
import {PortfolioPageContainer} from "../components/Portfolio/PortfolioPageContainer";
import {SSRConfig} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Dict} from "../models";
import {WebItem} from "../components/Portfolio/Item/Web";
import {Namespace} from "../utilities/locales";

interface WebsProps extends SSRConfig {
  webs: Web[],
}

export const getStaticProps: GetStaticProps<WebsProps> = async ({ locale }) => {

  return {
    props: {
      webs: await apiService.get('/api/webs?populate=*')
        .then(({ data }) => data.data),
      ...(await serverSideTranslations(locale as string, [Namespace.common])),
    }
  }
}


const Webs: NextPage<WebsProps> = ({ webs, _nextI18Next }) => {

  const { initialI18nStore, initialLocale } = _nextI18Next;

  const keys = initialI18nStore[initialLocale].common as Dict<any>;

  return (
    <PortfolioPageContainer title={ keys.web.title }
                            backgroundSrc="/img/web.jpg"
                            backgroundColor="bg-jy-blue">
      <>
        {
          webs.map(web =>
            <WebItem web={ web } />
          )
        }
      </>
    </PortfolioPageContainer>
  )
}

export default Webs