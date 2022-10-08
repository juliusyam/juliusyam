import { Design } from '../../models/apiModels';
import { getDesign, getDesigns } from "../../services/ApiRoutes";
import {GetStaticProps, NextPage} from "next";
import {useRouter} from "next/router";
import {FullPageSlideWrapper} from "../../components/FullPage/FullPageSlideWrapper";
import ReactFullPage from '@fullpage/react-fullpage';
import Image from "next/image";

interface DesignPageProps {
  design?: Design
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

export const getStaticProps: GetStaticProps<DesignPageProps> = async({ params }) => {

  const id = params?.id;

  const design = await getDesign(id as string);

  return {
    props: {
      design,
    }
  }
}

const DesignPage: NextPage<DesignPageProps> = ({ design }) => {

  const { push } = useRouter();

  if (!design) return null;

  const { attributes: { about, image, title, onlinePresences, contribution } } = design;

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
          <FullPageSlideWrapper dataAnchor="initial">
            <div className="grid relative w-full h-screen">
              <Image src={ image.data.attributes.url }
                     width="100%"
                     height="100%"
                     objectFit="cover"
                     layout="fill" />

              <div className="absolute top-0 left-0 w-full h-full bg-jy-blue bg-opacity-80" />

            </div>
          </FullPageSlideWrapper>
        </ReactFullPage.Wrapper>
        )
    } />
  )
}

export default DesignPage