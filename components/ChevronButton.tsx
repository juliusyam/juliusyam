import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

export enum Direction {
  left = 'left',
  right = 'right',
}

interface ChevronButtonProps {
  onClick?: () => void,
  direction: Direction,
  className?: string,
}

export function ChevronButton({ onClick, direction, className }: ChevronButtonProps) {

  return (
    <button className={`hover:bg-black transition-all duration-500 ${ className }`}
            onClick={ onClick }>
      <FontAwesomeIcon icon={ direction === Direction.left ? faChevronLeft : faChevronRight }
                       size="3x"
                       color="#D1D5DB" />
    </button>
  )
}