import {GetStaticProps, NextPage} from "next";
import {getArtwork, getArtworks} from "../../services/ApiRoutes";
import {Artwork} from "../../models/apiModels";
import Image from 'next/image';
import {useEffect, useState} from "react";
import {CarouselImage, ImageCarousel} from "../../components/Carousel";
import {Routes} from "../../utilities/routes";
import {replaceUrlState} from "../../utilities/url";
import {useActivityContext} from "../../contexts/ActivityContext";
import {LoadingSpinner} from "../../components/LoadingSpinner";
import {SSRConfig} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Namespace} from "../../utilities/locales";

interface DigitalArtworkPageProps extends SSRConfig {
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

export const getStaticProps: GetStaticProps<DigitalArtworkPageProps> = async ({ params, locale }) => {

  const id = params?.id;

  const digitalArtwork = await getArtwork(id as string);

  return {
    props: {
      digitalArtwork,
      ...(await serverSideTranslations(locale as string, [Namespace.common])),
    }
  }
}

const DigitalArtworkPage: NextPage<DigitalArtworkPageProps> = ({ digitalArtwork }) => {

  const { dict, startActivity, completeActivity } = useActivityContext();
  const [galleryImages, setGalleryImages] = useState<CarouselImage[]>([]);

  const loadingKey = 'load-artworks';

  useEffect(() => {
    startActivity(loadingKey);
    getArtworks()
      .then(artworks => {
        const images: CarouselImage[] = artworks.reduce<CarouselImage[]>((all, each) => {

          const { id, attributes: { title, description, image } } = each;

          all.push({ id, title, description, src: image.data.attributes.url });
          return all;
        }, []);

        setGalleryImages(images);

        completeActivity(loadingKey);
      });
  }, []);

  if (!digitalArtwork) return null;

  const { attributes: { image }, id } = digitalArtwork;

  const FullImage = ({ blur }: { blur?: boolean }) => (
    <div className={`grid w-full h-screen overflow-hidden relative ${ blur ? 'blur' : '' }`}>
      <Image src={ image.data.attributes.url }
             layout="fill"
             objectFit="cover"
      />
    </div>
  )

  return (
    dict[loadingKey] ?
      <div className="relative">
        <FullImage blur={ true } />
        <LoadingSpinner className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2" />
      </div> :
      galleryImages.length ?
          <ImageCarousel images={ galleryImages }
                         initialIdx={ galleryImages.findIndex(g => g.id === id) }
                         onChangeSlide={ id => {
                           replaceUrlState(Routes.digitalArtwork(id));
                         } }
          /> :
          <FullImage />
  )
}

export default DigitalArtworkPage