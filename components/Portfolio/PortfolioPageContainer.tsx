import { ChildrenProps } from '../../models';
import Image from "next/image";
import {useScroll} from "../../hooks/useScroll";

interface PortfolioPageContainerProps extends ChildrenProps {
  title: string,
  backgroundColor: string,
  backgroundSrc: string,
  fontSize?: string,
}

export function PortfolioPageContainer({ title, backgroundColor, backgroundSrc, children, fontSize }: PortfolioPageContainerProps) {

 const { ref, scrollProps: { componentHeight, scrollPosition } } = useScroll();

  return (
    <div className="grid grid-cols-1
    md:grid-cols-portfolio-display-md
    lg:grid-cols-portfolio-display-lg
    xl:grid-cols-portfolio-display-xl
    w-full h-screen">

      <div className="grid w-full h-24 md:h-full relative overflow-hidden">
        <Image src={ backgroundSrc }
               layout="responsive"
               objectFit="cover"
               width="100%"
               height="100%"
               style={ { transform: `scale(${ (scrollPosition / componentHeight) + 1 })` } }
        />

        <div className={`absolute top-0 left-0 w-full h-full ${ backgroundColor } bg-opacity-80`} />

        <h1 className={`font-ocr drop-shadow-text absolute left-0 md:left-auto right-auto md:right-0 top-20 md:top-48 ${ fontSize || 'text-3xl xl:text-9xl' } w-full break-all text-left md:text-right p-4`}>{ title }</h1>
      </div>

      <div className="grid grid-cols-1 gap-20 md:gap-40 xl:gap-80 2xl:gap-96 px-5 md:px-16 py-20 md:py-64 h-full overflow-y-scroll" ref={ ref }>
        { children }
      </div>
    </div>
  )
}