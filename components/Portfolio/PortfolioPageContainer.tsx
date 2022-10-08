import { ChildrenProps } from '../../models';
import Image from "next/image";

interface PortfolioPageContainerProps extends ChildrenProps {
  title: string,
  backgroundColor: string,
  backgroundSrc: string,
}

export function PortfolioPageContainer({ title, backgroundColor, backgroundSrc, children }: PortfolioPageContainerProps) {
  return (
    <div className="grid grid-cols-1
    md:grid-cols-portfolio-display-md
    lg:grid-cols-portfolio-display-lg
    xl:grid-cols-portfolio-display-xl
    w-full h-screen -mt-20">

      <div className="grid w-full h-full relative">
        <Image src={ backgroundSrc }
               layout="responsive"
               objectFit="cover"
               width="100%"
               height="100%" />

        <div className={`absolute top-0 left-0 w-full h-full ${ backgroundColor } bg-opacity-80`} />

        <h1 className="font-ocr drop-shadow-text absolute right-0 top-48 text-3xl xl:text-9xl w-full break-all text-right">{ title }</h1>
      </div>

      <div className="grid grid-cols-1 gap-64 px-16 py-64 h-full overflow-y-scroll">
        { children }
      </div>
    </div>
  )
}