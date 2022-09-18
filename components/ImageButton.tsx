import Image from "next/image";
import styles from '../styles/ImageButton.module.scss';
import {useState} from "react";

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

  const [{ initial, hover }, setHoverState] = useState({
    initial: true,
    hover: false,
  });

  const handleMouseEnter = () => {
    setHoverState({
      initial: false,
      hover: true,
    });
  }

  const handleMouseLeave = () => {
    setHoverState({
      initial: false,
      hover: false,
    });
  }

  return (
    <div className={`grid relative w-full h-full overflow-hidden cursor-pointer ${ className }`}
         onClick={ onClick } onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>

      <Image src={ src } width={ width || '800' } height={ height || '300' } objectFit="cover" />

      {
        darken && <div className="absolute top-0 left-0 w-full h-full bg-jy-background bg-opacity-20" />
      }

      <h5 className="font-ocr drop-shadow-text w-2/3 absolute bottom-3 left-3 text-3xl">
        { children }
      </h5>

      <div className={`absolute ${ background || 'bg-jy-lime' } 
      w-full h-full grid place-items-center bg-opacity-80 
      ${ initial ? styles.initialContainer : hover ? styles.hoveredContainer : styles.container }`}>

        <h5 className={`font-tomorrow w-2/3 text-3xl text-center 
        ${ background == ImageButtonBackground.black ? 'text-white' : 'text-jy-background' }`}>{ onHoverText }</h5>
      </div>
    </div>
  )
}