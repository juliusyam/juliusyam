import Link from 'next/link';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export enum Social {
  instagram = 'instagram',
  linkedin = 'linkedin',
  facebook = 'facebook',
  web = 'web',
}

interface SocialButtonProps {
  social: Social,
  href: string,
  hoverColor: string,
}

export function SocialButton({ social, href, hoverColor }: SocialButtonProps) {

  let icon: IconProp

  switch (social) {
    case Social.instagram:
      icon = faInstagram;
      break;
    case Social.linkedin:
      icon = faLinkedinIn;
      break;
    case Social.facebook:
      icon = faFacebook;
      break;
    default:
      icon = faGlobeEurope
      break;
  }

  return (
    <Link href={ href } passHref>
      <a target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={ icon }
                         size="3x"
                         color="#D1D5DB"
                         className={`hover:${ hoverColor } transition ease-in-out duration-500 mb-4`}
        />
      </a>
    </Link>
  )
}