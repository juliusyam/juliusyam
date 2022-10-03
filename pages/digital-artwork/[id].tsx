import {GetStaticProps, NextPage} from "next";
import {getArtwork, getArtworks} from "../../services/ApiRoutes";
import {Artwork} from "../../models/apiModels";
import Image from 'next/image';
import {ChevronButton, Direction} from "../../components/ChevronButton";
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {Routes} from "../../utilities/routes";

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
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<DigitalArtworkProps> = async({ params }) => {

  const id = params?.id;

  const digitalArtwork = await getArtwork(id as string);

  if (!digitalArtwork) {
    return {
      redirect: {
        destination: Routes.digitalArtwork(1),
        permanent: false,
      },
    }
  }

  return {
    props: {
      digitalArtwork,
    }
  }
}

const DigitalArtwork: NextPage<DigitalArtworkProps> = ({ digitalArtwork }) => {

  const { push } = useRouter();

  if (!digitalArtwork) return null;

  const { attributes: { title, description, image }, id } = digitalArtwork;

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 200, y: 0, transition: {
      duration: 0.25
    } },
  }

  return (
    <div className="grid w-full h-screen overflow-hidden relative -mt-20">
      <motion.div key={ id }
                  variants={ variants }
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  transition={{ type: 'spring', duration: 2, stiffness: 75, delay: 0.25 }}>

        <div className='absolute left-0 top-0 w-full h-[calc(100%_-_16rem)] lg:h-[calc(100%_-_9rem)]'>
          <Image src={ image.data.attributes.url }
                 width="1920"
                 height="1080"
                 layout="fill"
                 objectFit="cover"
          />
        </div>
      </motion.div>

      <div className="absolute left-0 bottom-0 grid grid-cols-1 lg:grid-cols-2 bg-jy-background w-full h-64 lg:h-36">
        <section className="p-5 grid items-center">
          <h1 className="font-ocr text-3xl pb-5 truncate">{ title }</h1>
          <h2 className="font-ocr text-base text-gray-500 truncate">{ description }</h2>
        </section>
        <section className="grid grid-cols-2">
          <ChevronButton direction={ Direction.left }
                         onClick={ () => push(Routes.digitalArtwork(id - 1)) }
                         disabled={ id <= 1 }
          />
          <ChevronButton direction={ Direction.right }
                         onClick={ () => push(Routes.digitalArtwork(id + 1)) }
          />
        </section>
      </div>
    </div>
  )
}

export default DigitalArtwork