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
      <section className="p-5 grid items-center">
        <h1 className="font-ocr text-3xl pb-5 truncate">{ title }</h1>
        <h2 className="font-ocr text-base text-gray-500 truncate">{ description }</h2>
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