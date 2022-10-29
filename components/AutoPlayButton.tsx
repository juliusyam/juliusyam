import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import {useViewport} from "../hooks/useViewport";

export interface AutoPlay {
  currentState: boolean,
  toggle: () => void,
}

interface AutoPlayButtonProps {
  autoPlay: AutoPlay,
  className?: string,
  disabled?: boolean,
}

export function AutoPlayButton({ autoPlay, className, disabled }: AutoPlayButtonProps) {

  const { views } = useViewport();

  return (
    <button className={`hover:bg-black transition-all duration-500 ${ className } p-1`}
            onClick={ autoPlay.toggle }
            disabled={ disabled }>

      <div className="grid place-items-center">
        <FontAwesomeIcon icon={ autoPlay.currentState ? faPause : faPlay }
                         size={ views['sm'] ? 'sm' : views['lg'] ? '1x' : '2x' }
                         color="#D1D5DB"
                         className="mb-2 sm:mb-4"
        />

        <h6 className="font-ocr text-xs sm:text-sm">Autoplay</h6>
      </div>
    </button>
  )
}