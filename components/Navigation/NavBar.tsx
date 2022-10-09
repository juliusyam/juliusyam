import Link from "next/link";
import {Routes} from "../../utilities/routes";
import JuliusYam from "../JuliusYam";

interface NavBarProps {
  openPanel: () => void,
}

export function NavBar({ openPanel }: NavBarProps) {

  return (
    <div className="p-5 flex justify-between items-center">
      <Link href={ Routes.homeWithAnchor('initial') }>
        <a><JuliusYam /></a>
      </Link>

      <div onClick={ openPanel } className="cursor-pointer">
        <div className="w-16 h-0.5 bg-gray-300 mb-2" />
        <div className="w-16 h-0.5 bg-gray-300" />
      </div>
    </div>
  )
}