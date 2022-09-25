import {GetStaticProps, NextPage} from "next";
import {apiService} from "../../services/ApiService";
import {Artwork} from "../../models/apiModels";
import {getStrapiImageUrl} from "../../utilities/image";
import styles from '../../styles/ImageGallery.module.scss';

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

const Index: NextPage<DigitalArtworksProps> = ({ digitalArtworks }) => {

  return (
    <div className={`relative columns-1 md:columns-2 lg:columns-3 m-5 md:m-20 h-full ${ styles.imageGallery }`}>
      {
        digitalArtworks.map(artwork =>
          <div className='w-full h-full relative mb-4 cursor-zoom-in'>
            <img src={ getStrapiImageUrl(artwork.attributes.image.data.attributes.url) } alt=""/>
          </div>
        )
      }
    </div>
  )
}

export default Index