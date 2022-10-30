import {ChevronButton, Direction} from "../ChevronButton";
import {AutoPlay, AutoPlayButton} from "../AutoPlayButton";

interface CarouselBottomControlsProps {
  title: string,
  description: string,
  onClickLeft: () => void,
  onClickRight: () => void,
  autoPlay: AutoPlay,
}

export function CarouselBottomControls({ title, description, onClickLeft, onClickRight, autoPlay }:CarouselBottomControlsProps) {

  const textFormatting = 'line-clamp-2 lg:line-clamp-1 lg:truncate';

  return (
    <div className="z-50 absolute left-0 bottom-0 grid grid-cols-1 lg:grid-cols-2 bg-jy-background w-full h-40 sm:h-64 lg:h-36">
      <section className="p-2 sm:p-5 grid items-center h-24 sm:h-36 lg:h-36 overflow-hidden">
        <h1 className={`font-ocr text-sm sm:text-xl lg:text-3xl pb-1 lg:pb-5 ${ textFormatting }`}>{ title }</h1>
        <h2 className={`font-ocr text-xs sm:text-base text-gray-500 ${ textFormatting }`}>{ description }</h2>
      </section>
      <section className="grid grid-cols-3">
        <ChevronButton direction={ Direction.left }
                       onClick={ onClickLeft }
        />
        <ChevronButton direction={ Direction.right }
                       onClick={ onClickRight }
        />
        <AutoPlayButton autoPlay={ autoPlay } />
      </section>
    </div>
  )
}