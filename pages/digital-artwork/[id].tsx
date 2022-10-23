import {GetStaticProps, NextPage} from "next";
import {getArtwork, getArtworks} from "../../services/ApiRoutes";
import {Artwork} from "../../models/apiModels";
import Image from 'next/image';
import { useRouter } from 'next/router';
import {useEffect, useState} from "react";
import {Carousel} from "../../components/Carousel";

interface DigitalArtworkPageProps {
  digitalArtwork?: Artwork
}

export const getStaticPaths = async () => {

  return {
    paths: await getArtworks().then(artworks => artworks.map(a => ({
      params: {
        id: a.id.toString(),
      }
    }))),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<DigitalArtworkPageProps> = async ({ params }) => {

  const id = params?.id;

  const digitalArtwork = await getArtwork(id as string);

  return {
    props: {
      digitalArtwork,
    }
  }
}

const DigitalArtworkPage: NextPage<DigitalArtworkPageProps> = ({ digitalArtwork }) => {

  const { push } = useRouter();

  if (!digitalArtwork) return null;

  const { attributes: { image }, id } = digitalArtwork;

  const [galleryArtworks, setGalleryArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    getArtworks()
      .then(artworks => {
        console.log('index', artworks.findIndex(g => g.id === id));
        setGalleryArtworks(artworks);
      });

  }, []);

  return (
      galleryArtworks.length ?
        <Carousel interval={ 3000 }
                  loop={ true }
                  autoPlay={ true }
                  initialIdx={ galleryArtworks.findIndex(g => g.id === id) }>
          {
            galleryArtworks.map((artwork, i) => (
              <img src={ artwork.attributes.image.data.attributes.url }
                   className="w-full h-full object-cover"
                   draggable={ false }
                   key={ i }
                   alt={ artwork.attributes.title } />
            ))
          }
        </Carousel> :
        <div className="grid w-full h-screen overflow-hidden relative">
          <Image src={ image.data.attributes.url }
                 width="1920"
                 height="1080"
                 layout="fill"
                 objectFit="cover"
          />
        </div>
  )
}

export default DigitalArtworkPage