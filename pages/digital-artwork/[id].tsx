import {GetStaticProps, NextPage} from "next";
import {getArtwork, getArtworks} from "../../services/ApiRoutes";
import {Artwork} from "../../models/apiModels";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {Routes} from "../../utilities/routes";
import {useSwipeable} from "react-swipeable";
import {CarouselBottomControls} from "../../components/Carousel/BottomControls";

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

  // if (!digitalArtwork) {
  //   return {
  //     redirect: {
  //       destination: Routes.digitalArtwork(1),
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: {
      digitalArtwork,
    }
  }
}

const DigitalArtworkPage: NextPage<DigitalArtworkPageProps> = ({ digitalArtwork }) => {

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

  // const handlers = useSwipeable({
  //   onSwipedLeft: () => push(Routes.digitalArtwork(id - 1)),
  //   onSwipedRight: () => push(Routes.digitalArtwork(id + 1)),
  // });

  return (
    <div className="grid w-full h-screen overflow-hidden relative">
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

      <CarouselBottomControls title={ title }
                              description={ description }
                              onClickLeft={ () => push(Routes.digitalArtwork(id - 1)) }
                              onClickRight={ () => push(Routes.digitalArtwork(id + 1)) } />
    </div>
  )
}

export default DigitalArtworkPage