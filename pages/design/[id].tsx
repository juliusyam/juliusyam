import {Design, DesignImageItem} from '../../models/apiModels';
import {getDesign, getDesignImageItems, getDesigns} from "../../services/ApiRoutes";
import {GetStaticProps, NextPage} from "next";
import {FullPageSlideWrapper} from "../../components/FullPage/FullPageSlideWrapper";
import ReactFullPage from '@fullpage/react-fullpage';
import Image from "next/image";
import {ChildrenProps, Dict, StringChildrenProps} from "../../models";
import {SocialButton} from "../../components/SocialButton";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Namespace} from "../../utilities/locales";
import {SSRConfig} from "next-i18next";
import {DesignPageCarousel} from "../../components/Carousel/DesignPageCarousel";

interface DesignPageProps extends SSRConfig {
  design?: Design,
  products: DesignImageItem[],
}

interface DetailsContainerProps extends ChildrenProps {
  title: string,
}

export const getStaticPaths = async () => {

  return {
    paths: await getDesigns().then(designs => designs.map(d => ({
      params: {
        id: d.id.toString(),
      }
    }))),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<DesignPageProps> = async({ params, locale }) => {

  const id = params?.id;

  const design = await getDesign(id as string);
  const products = await getDesignImageItems(id as string);

  return {
    props: {
      design,
      products,
      ...(await serverSideTranslations(locale as string, [Namespace.common])),
    }
  }
}

const DesignPage: NextPage<DesignPageProps> = ({ design, products , _nextI18Next }) => {

  if (!design) return null;

  const { attributes: { about, image, title, onlinePresences, contribution } } = design;

  const { initialI18nStore, initialLocale } = _nextI18Next;
  const keys = initialI18nStore[initialLocale].common as Dict<any>;

  const DetailsContainer = ({ title, children }: DetailsContainerProps) => (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12">
      <div className="grid justify-start md:justify-end items-start">
        <h2 className="font-ocr text-jy-green text-2xl md:text-4xl text-left md:text-right">{ title }</h2>
      </div>
      <div className="grid justify-start items-start">{ children }</div>
    </section>
  )

  const Paragraph = ({ children }: StringChildrenProps) => (
    <p className="font-tomorrow leading-5 md:leading-7 text-sm md:text-base">{ children }</p>
  )

  return (
    <ReactFullPage
      licenseKey={ process.env.NEXT_PUBLIC_FULL_PAGE_KEY }
      render={() => (
        <ReactFullPage.Wrapper>
          <FullPageSlideWrapper dataAnchor="initial">
            <div className="grid relative w-full h-screen">
              <Image src="/img/design.jpg"
                     width="100%"
                     height="100%"
                     objectFit="cover"
                     layout="fill" />

              <div className="absolute top-0 left-0 w-full h-full bg-jy-green bg-opacity-80" />

              <div className="absolute w-full h-full bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 flex justify-center items-center p-5 md:p-20">
                <Image src={ image.data.attributes.url }
                       width="900"
                       height="900"
                       objectFit="contain"
                       layout="intrinsic" />
              </div>

              <div className="grid p-5 md:p-20 justify-start items-end">
                <h1 className="font-ocr drop-shadow-text text-5xl md:text-7xl lg:text-9xl break-word w-full md:w-2/3">{ title }</h1>
              </div>
            </div>
          </FullPageSlideWrapper>
          <FullPageSlideWrapper dataAnchor="about">
            <div className="grid grid-flow-row gap-12 p-5 md:p-20">
              <DetailsContainer title={ keys.about }>
                <Paragraph>{ about }</Paragraph>
              </DetailsContainer>

              <DetailsContainer title={ keys.what_i_did }>
                <Paragraph>{ contribution }</Paragraph>
              </DetailsContainer>

              <DetailsContainer title={ keys.online_presences }>
                <div className="grid grid-flow-col gap-4">
                  {
                    onlinePresences.map((onlinePresence, i) =>
                      <SocialButton social={ onlinePresence.presenceType }
                                    href={ onlinePresence.link }
                                    hoverColor="text-jy-green"
                                    key={ i }
                      />
                    )
                  }
                </div>
              </DetailsContainer>
            </div>
          </FullPageSlideWrapper>

          <DesignPageCarousel products={ products } />
        </ReactFullPage.Wrapper>
        )
    } />
  )
}

export default DesignPage