import {GetStaticProps, NextPage} from 'next';
import {apiService} from '../../services/ApiService';
import {Artwork} from '../../models/apiModels';
import styles from '../../styles/ImageGallery.module.scss';
import Link from 'next/link';
import {Routes} from "../../utilities/routes";

export interface DigitalArtworksProps {
  digitalArtworks: Artwork[],
}

export const getStaticProps: GetStaticProps<DigitalArtworksProps> = async() => {

  return {
    props: {
      digitalArtworks: await apiService.get('/api/artworks?populate=*')
        .then(({ data }) => data.data)
    }
  }
}

const DigitalArtworks: NextPage<DigitalArtworksProps> = ({ digitalArtworks }) => {

  console.log(digitalArtworks);

  return (
    <div className={`relative columns-1 md:columns-2 lg:columns-3 m-5 md:m-20 h-full ${ styles.imageGallery }`}>
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
  )
}

export default DigitalArtworks