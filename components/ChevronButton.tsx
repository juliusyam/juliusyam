import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useViewport} from "../hooks/useViewport";

export enum Direction {
  left = 'left',
  right = 'right',
}

interface ChevronButtonProps {
  onClick?: () => void,
  direction: Direction,
  className?: string,
  disabled?: boolean,
}

export function ChevronButton({ onClick, direction, className, disabled }: ChevronButtonProps) {

  const { views } = useViewport();

  return (
    <button className={`hover:bg-black transition-all duration-500 ${ className } p-1`}
            onClick={ onClick }
            disabled={ disabled }>
      <FontAwesomeIcon icon={ direction === Direction.left ? faChevronLeft : faChevronRight }
                       size={ views['sm'] ? '1x' : views['lg'] ? '2x' : '3x' }
                       color="#D1D5DB" />
    </button>
  )
}