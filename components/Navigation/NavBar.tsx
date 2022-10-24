import Link from "next/link";
import {Routes} from "../../utilities/routes";
import JuliusYam from "../JuliusYam";
import {NavButton} from "./NavButton";

interface NavBarProps {
  openPanel: () => void,
}

export function NavBar({ openPanel }: NavBarProps) {

  return (
    <div className="p-5 flex justify-between items-center">
      <Link href={ Routes.homeWithAnchor('initial') }>
        <a><JuliusYam fontSize="text-md sm:text-2xl" /></a>
      </Link>

      <NavButton onClick={ openPanel } />
    </div>
  )
}