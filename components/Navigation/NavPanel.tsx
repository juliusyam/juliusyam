import Image from "next/image";
import Link from "next/link";
import {Routes} from "../../utilities/routes";
import JuliusYam from "../JuliusYam";
import NavList from './NavList';
import {NavCloseButton} from "./NavButton";

export interface NavPanelProps {
  closePanel: () => void,
}

export function NavPanel({ closePanel }: NavPanelProps) {

  return (
    <div className="grid bg-jy-background w-full h-screen relative">
      <div className="absolute top-0 left-0 w-full h-screen grid place-items-center opacity-5">
        <Image src='/img/perspective-sketch.png' layout="fill"
               width="1920" height="1080" objectFit="cover" />
      </div>

      <NavCloseButton onClick={ closePanel } />

      <div className="grid grid-cols-2 w-full h-full">
        <div className="hidden md:grid justify-items-end items-center">
          <Link href={ Routes.homeWithAnchor('initial') }>
            <div className="grid p-20 cursor-pointer">
              <JuliusYam textAlign="text-right"
                         fontSize="md:text-6xl lg:text-8xl text-right"
                         dropShadow="md:drop-shadow-jy-text lg:drop-shadow-jy-text-xl" />
            </div>
          </Link>
        </div>

        <div className="grid justify-items-start items-center">
          <NavList closePanel={ closePanel } />
        </div>
      </div>
    </div>
  )
}