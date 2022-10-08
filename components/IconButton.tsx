import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Social} from "./SocialButton";

interface IconButtonProps {
  icon: IconDefinition,
  children: string,
  onClick?: () => void,
}

export function IconButton({ icon, onClick, children }: IconButtonProps) {

  return (
    <button onClick={ onClick }>
      <div className="flex justify-center items-center px-8 py-4 w-fit bg-jy-blue hover:bg-jy-blue-700">
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