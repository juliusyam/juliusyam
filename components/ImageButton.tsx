import Image from "next/image";
import styles from '../styles/ImageButton.module.scss';
import {useState} from "react";

interface ImageButtonProps {
  children: string,
  onHoverText?: string,
  onClick?: () => void,
  src: string,
  className?: string,
}

export function ImageButton({ children, onHoverText, onClick, src, className }: ImageButtonProps) {

  const [hover, setHover] = useState(false);

  return (
    <div className={`grid relative w-full h-full overflow-hidden cursor-pointer ${ className }`}
         onClick={ onClick }
         onMouseEnter={ () => setHover(true ) }
         onMouseLeave={ () => setHover(false )}>
      <Image src={ src } width="800" height="300" objectFit="cover" />

      <div className="absolute top-0 left-0 w-full h-full bg-jy-background bg-opacity-20" />

      <h5 className="font-ocr drop-shadow-text w-2/3 absolute bottom-3 left-3 text-3xl">
        { children }
      </h5>

      <div className={`absolute bg-jy-lime w-full h-full grid place-items-center ${ hover ? styles.hoveredContainer : styles.container }`}>
        <h5 className="font-tomorrow w-2/3 text-3xl text-center text-jy-background">{ onHoverText }</h5>
      </div>
    </div>
  )
}