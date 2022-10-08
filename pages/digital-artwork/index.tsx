import {GetStaticProps, NextPage} from 'next';
import {Artwork} from '../../models/apiModels';
import styles from '../../styles/ImageGallery.module.scss';
import Link from 'next/link';
import {Routes} from "../../utilities/routes";
import {getArtworks} from "../../services/ApiRoutes";

export interface DigitalArtworksProps {
  digitalArtworks: Artwork[],
}

export const getStaticProps: GetStaticProps<DigitalArtworksProps> = async() => {

  return {
    props: {
      digitalArtworks: await getArtworks()
    }
  }
}

const DigitalArtworks: NextPage<DigitalArtworksProps> = ({ digitalArtworks }) => {

  return (
    <div className="pt-20">
      <div className={`relative columns-1 md:columns-2 lg:columns-3 m-5 md:m-10 ${ styles.imageGallery }`}>
        {
          digitalArtworks.map(artwork =>
            <Link href={ Routes.digitalArtwork(artwork.id) }>
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