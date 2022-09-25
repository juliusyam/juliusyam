import {GetStaticProps, NextPage} from "next";
import {apiService} from "../services/ApiService";
import {Artwork} from "../models/apiModels";
import Image from 'next/image';
import {getStrapiImageUrl} from "../utilities/image";

interface DigitalArtworksProps {
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
    <div className='relative columns-1 md:columns-2 lg:columns-3 m-5 md:m-20 h-full'>
      {
        digitalArtworks.map(artwork =>
          <div className='w-full h-full relative mb-4'>
            <img src={ getStrapiImageUrl(artwork.attributes.image.data.attributes.url) } alt=""/>
          </div>
        )
      }
    </div>
  )
}

export default DigitalArtworks