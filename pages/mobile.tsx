import {GetStaticProps, NextPage} from "next";
import {PortfolioPageContainer} from "../components/Portfolio/PortfolioPageContainer";
import {SSRConfig} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Namespace} from "../utilities/locales";
import {Dict} from "../models";
import { Mobile } from '../models/apiModels';
import { apiService } from '../services/ApiService';
import { WebItem } from '../components/Portfolio/Item/Web';

interface MobilesProps extends SSRConfig {
  mobiles: Mobile[],
}

export const getStaticProps: GetStaticProps<MobilesProps> = async ({ locale }) => {

  return {
    props: {
      mobiles: await apiService.get('/api/mobiles?populate=*')
        .then(({ data }) => data.data),
      ...(await serverSideTranslations(locale as string, [Namespace.common])),
    }
  }
}

const Mobiles: NextPage<MobilesProps> = ({ mobiles, _nextI18Next }) => {

  const { initialI18nStore, initialLocale } = _nextI18Next;

  const keys = initialI18nStore[initialLocale].common as Dict<any>;

  return (
    <PortfolioPageContainer title={ keys.mobile.title }
                            backgroundColor="bg-amber-500"
                            backgroundSrc="/img/mobile.jpg">
      {
        mobiles
          .sort((a, b) => (
            b.attributes.sortOrder - a.attributes.sortOrder)
          )
          .map(web =>
            <WebItem web={ web } key={ web.id } />
          )
      }
    </PortfolioPageContainer>
  )
}

export default Mobiles
