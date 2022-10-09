import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { ColorGroupDict } from '../utilities/color';

interface IconButtonProps {
  icon: IconDefinition,
  children: string,
  onClick?: () => void,
  colorGroup: ColorGroupDict,
  className?: string,
}

export function IconButton({ icon, onClick, children, colorGroup: { background }, className }: IconButtonProps) {

  return (
    <button onClick={ onClick } className={ className || '' }>
      <div className={`flex justify-center items-center px-8 py-4 w-fit ${ background.main } hover:${ background.hover }`}>
        <FontAwesomeIcon icon={ icon }
                         size="xl"
                         color="#171717"
                         className="transition ease-in-out duration-500 mr-2"
        />
        <h6 className="font-tomorrow text-lg text-jy-background text-xl font-bold whitespace-nowrap">{ children }</h6>
      </div>
    </button>
  )
}