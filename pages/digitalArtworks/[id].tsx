import {GetStaticProps, NextPage} from "next";
import {getArtwork, getArtworks} from "../../services/ApiRoutes";
import {Artwork} from "../../models/apiModels";
import Image from 'next/image';
import {getStrapiImageUrl} from "../../utilities/image";
import {ChevronButton, Direction} from "../../components/ChevronButton";
import Link from 'next/link';
import { motion } from 'framer-motion';

interface DigitalArtworkProps {
  digitalArtwork?: Artwork
}

export const getStaticPaths = async() => {

  return {
    paths: await getArtworks().then(artworks => artworks.map(a => ({
      params: {
        id: a.id.toString(),
      }
    }))),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<DigitalArtworkProps> = async({ params }) => {

  const id = params?.id;

  return {
    props: {
      digitalArtwork: await getArtwork(id as string),
    }
  }
}

const DigitalArtwork: NextPage<DigitalArtworkProps> = ({ digitalArtwork }) => {

  if (!digitalArtwork) return null

  const { attributes: { title, description, image }, id } = digitalArtwork;

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <div className="grid w-full h-screen overflow-hidden relative -mt-20">
      <motion.div key={ id }
                  variants={ variants }
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  transition={{ type: 'linear' }}>

        <div className='absolute left-0 top-0 w-full h-full'>
          <Image src={ getStrapiImageUrl(image.data.attributes.url) }
                 width="1920"
                 height="1080"
                 layout="fill"
                 objectFit="cover"
          />
        </div>
      </motion.div>

      <div className="absolute left-0 bottom-0 grid grid-cols-2 bg-jy-background w-full">
        <section className="p-5">
          <h1 className="font-ocr text-3xl pb-5 truncate">{ title }</h1>
          <h2 className="font-ocr text-base text-gray-500 truncate">{ description }</h2>
        </section>
        <section className="grid grid-cols-2">
          <Link href={`/digitalArtworks/${ id - 1 }`}>
            <ChevronButton direction={ Direction.left } />
          </Link>
          <Link href={`/digitalArtworks/${ id + 1 }`}>
            <ChevronButton direction={ Direction.right } />
          </Link>
        </section>
      </div>
    </div>
  )
}

export default DigitalArtwork