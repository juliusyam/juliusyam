import {GetStaticProps, NextPage} from "next";
import {PortfolioPageContainer} from "../components/Portfolio/PortfolioPageContainer";
import {SSRConfig} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Namespace} from "../utilities/locales";
import {Dict} from "../models";

const mobileContents = require('../utilities/mobileConent.json') as MobileContent[];

interface MobileContent {
  title: string,
  description: string,
  duration: string,
  list: string[],
}

interface MobilesProps extends SSRConfig {
}

export const getStaticProps: GetStaticProps<MobilesProps> = async ({ locale }) => {

  return {
    props: {
      ...(await serverSideTranslations(locale as string, [Namespace.common])),
    }
  }
}

const Mobiles: NextPage<MobilesProps> = ({ _nextI18Next }) => {

  const { initialI18nStore, initialLocale } = _nextI18Next;

  const keys = initialI18nStore[initialLocale].common as Dict<any>;

  return (
    <PortfolioPageContainer title={ keys.mobile.title }
                            backgroundColor="bg-amber-500"
                            backgroundSrc="/img/mobile.jpg">
      <div>
        <h1 className="font-ocr text-3xl">Personal projects coming soon. My mobile development work from my employments include the following,</h1>

        {
          mobileContents.map((m, i) => (
            <div key={ i } className="my-20">
              <h2 className="font-ocr text-amber-500 text-2xl mb-2">{ m.title }</h2>
              <h3 className="font-ocr text-gray-700 mb-2">{ m.duration }</h3>
              <h3 className="font-tomorrow text-gray-400 mb-8">{ m.description }</h3>
              <ul className="ml-12">
                {
                  m.list.map((item, i) => (
                    <li key={ i } className="font-tomorrow text-gray-500 mb-2 list-disc">{ item }</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </PortfolioPageContainer>
  )
}

export default Mobiles