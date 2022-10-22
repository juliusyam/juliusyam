import {ChevronButton, Direction} from "../ChevronButton";

interface CarouselBottomControlsProps {
  title: string,
  description: string,
  onClickLeft: () => void,
  onClickRight: () => void,
}

export function CarouselBottomControls({ title, description, onClickLeft, onClickRight }:CarouselBottomControlsProps) {

  return (
    <div className="absolute left-0 bottom-0 grid grid-cols-1 lg:grid-cols-2 bg-jy-background w-full h-64 lg:h-36">
      <section className="p-5 grid items-center h-28 lg:h-auto">
        <h1 className="font-ocr text-xl lg:text-3xl pb-1 lg:pb-5 lg:truncate">{ title }</h1>
        <h2 className="font-ocr text-base text-gray-500 lg:truncate">{ description }</h2>
      </section>
      <section className="grid grid-cols-2">
        <ChevronButton direction={ Direction.left }
                       onClick={ onClickLeft }
        />
        <ChevronButton direction={ Direction.right }
                       onClick={ onClickRight }
        />
      </section>
    </div>
  )
}