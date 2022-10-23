import {GetStaticProps, NextPage} from "next";
import {getArtwork, getArtworks} from "../../services/ApiRoutes";
import {Artwork} from "../../models/apiModels";
import Image from 'next/image';
import { useRouter } from 'next/router';
import {useEffect, useState} from "react";
import {CarouselImage, ImageCarousel} from "../../components/Carousel";

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

  const [galleryImages, setGalleryImages] = useState<CarouselImage[]>([]);

  useEffect(() => {
    getArtworks()
      .then(artworks => {
        const images: CarouselImage[] = artworks.reduce<CarouselImage[]>((all, each) => {

          const { id, attributes: { title, description, image } } = each;

          all.push({ id, title, description, src: image.data.attributes.url });
          return all;
        }, []);

        setGalleryImages(images);
      });

  }, []);

  return (
    galleryImages.length ?
        <ImageCarousel images={ galleryImages }
                       initialIdx={ galleryImages.findIndex(g => g.id === id) } /> :
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