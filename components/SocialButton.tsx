import Link from 'next/link';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export enum Social {
  instagram,
  linkedin,
}

interface SocialButtonProps {
  social: Social,
  href: string,
}

export function SocialButton({ social, href }: SocialButtonProps) {

  return (
    <Link href={ href } passHref>
      <a target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={ social === Social.instagram ? faInstagram : faLinkedinIn }
                         size="3x"
                         color="#D1D5DB"
                         className="hover:text-jy-cyan transition ease-in-out duration-500 mb-4"
        />
      </a>
    </Link>
  )
}