import Image from "next/image";
import {useAnimationToggle} from "../hooks/useAnimationToggle";
import { motion, AnimatePresence } from "framer-motion";

export enum ImageButtonBackground {
  cyan = 'bg-jy-cyan',
  lime = 'bg-jy-lime',
  black = 'bg-jy-background'
}

interface ImageButtonProps {
  children?: string,
  onHoverText?: string,
  onClick?: () => void,
  src: string,
  className?: string,
  width?: string,
  height?: string,
  background?: ImageButtonBackground,
  darken?: boolean,
}

export function ImageButton({ children, onHoverText, onClick, src, className, width, height, background, darken }: ImageButtonProps) {

  const { state: { initialLoad, toggled }, toggleOn, toggleOff } = useAnimationToggle();

  return (
    <div className={`grid relative w-full h-full overflow-hidden cursor-pointer ${ className }`}
         onClick={ onClick } onMouseEnter={ toggleOn } onMouseLeave={ toggleOff }>

      <Image src={ src } width={ width || '800' } height={ height || '300' } objectFit="cover" />

      {
        darken && <div className="absolute top-0 left-0 w-full h-full bg-jy-background bg-opacity-20" />
      }

      <h5 className="font-ocr drop-shadow-text w-2/3 absolute bottom-3 left-3 text-lg lg:text-3xl">
        { children }
      </h5>

      <AnimatePresence>
        <motion.div initial={ { opacity: 0 } }
                    whileHover={ { opacity: 1 } }
                    className={`absolute ${ background || 'bg-jy-lime' } 
                  w-full h-full grid place-items-center bg-opacity-90`}>

          <h5 className={`font-tomorrow w-2/3 text-lg lg:text-3xl text-center 
        ${ background == ImageButtonBackground.black ? 'text-white' : 'text-jy-background' }`}>{ onHoverText }</h5>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}