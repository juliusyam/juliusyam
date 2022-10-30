import {GetStaticProps, NextPage} from 'next';
import {Artwork} from '../../models/apiModels';
import styles from '../../styles/ImageGallery.module.scss';
import Link from 'next/link';
import {Routes} from "../../utilities/routes";
import {getArtworks} from "../../services/ApiRoutes";
import {SSRConfig} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Namespace} from "../../utilities/locales";

export interface DigitalArtworksProps extends SSRConfig {
  digitalArtworks: Artwork[],
}

export const getStaticProps: GetStaticProps<DigitalArtworksProps> = async({ locale }) => {

  return {
    props: {
      digitalArtworks: await getArtworks(),
      ...(await serverSideTranslations(locale as string, [Namespace.common])),
    }
  }
}

const DigitalArtworks: NextPage<DigitalArtworksProps> = ({ digitalArtworks }) => {

  return (
    <div className="pt-20">
      <div className={`relative columns-1 md:columns-2 lg:columns-3 m-5 md:m-10 ${ styles.imageGallery }`}>
        {
          digitalArtworks.map(artwork =>
            <Link href={ Routes.digitalArtwork(artwork.id) } key={ artwork.id }>
              <div className='w-full h-full relative mb-4 cursor-zoom-in'>
                <img src={ artwork.attributes.image.data.attributes.url }
                     alt={ artwork.attributes.title }/>
              </div>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default DigitalArtworks