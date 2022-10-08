import JuliusYam from './JuliusYam';
import Link from 'next/link';
import Image from 'next/image';
import {StringChildrenProps} from '../models';
import styles from '../styles/Navigation.module.scss';
import {useAnimationToggle} from "../hooks/useAnimationToggle";
import {Routes} from "../utilities/routes";
import {useTranslation} from "react-i18next";
import {Namespace} from "../utilities/locales";

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

interface NavPanelProps {
  closePanel: () => void,
}

export function NavPanel({ closePanel }: NavPanelProps) {

  return (
    <div className="grid bg-jy-background w-full h-screen relative">
      <div className="absolute top-0 left-0 w-full h-screen grid place-items-center opacity-5">
        <Image src='/img/perspective-sketch.png' layout="fill"
               width="1920" height="1080" objectFit="cover" />
      </div>

      <div onClick={ closePanel } className="cursor-pointer absolute top-14 right-5">
        <div className="w-16 h-0.5 bg-gray-300 rotate-45" />
        <div className="w-16 h-0.5 -mt-0.5 bg-gray-300 rotate-135" />
      </div>

      <div className="grid grid-cols-2 w-full h-full">
        <div className="hidden md:grid justify-items-end items-center">
          <Link href={ Routes.homeWithAnchor('initial') }>
            <div className="grid p-20 cursor-pointer">
              <JuliusYam textAlign="text-right" fontSize="md:text-6xl lg:text-8xl text-right" />
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

interface NavItemProps extends StringChildrenProps {
  href: string,
}

export function NavList({ closePanel }: NavPanelProps) {

  const Title = ({ children }: StringChildrenProps) => (
    <h4 className="font-ocr text-1xl sm:text-2xl text-jy-cyan mb-4">{ children }</h4>
  )

  const NavItem = ({ href, children }: NavItemProps) => (
    <Link href={ href }>
      <a><h3 className="font-ocr text-white text-2xl sm:text-4xl mb-4">{ children }</h3></a>
    </Link>
  )

  const Divider = () => (
    <div className="mb-10" />
  )

  const { t } = useTranslation(Namespace.common);

  return (
    <div className="p-5 mb:p-20 z-10" onClick={ closePanel }>
      <Title>{ t('experience') }</Title>
      <NavItem href={ Routes.clients }>{ t('previous_clients.title') }</NavItem>
      <NavItem href={ Routes.techStack }>{ t('tech_stack.title') }</NavItem>

      <Divider />

      <Title>{ t('projects') }</Title>
      <NavItem href={ Routes.webs }>{ t('web.title') }</NavItem>
      <NavItem href={ Routes.mobiles }>{ t('mobile.title') }</NavItem>
      <NavItem href={ Routes.designs }>{ t('design.title') }</NavItem>
      <NavItem href={ Routes.experiments }>{ t('experimental_projects.title') }</NavItem>
      <NavItem href={ Routes.digitalArtworks }>{ t('digital_artwork.title') }</NavItem>

      <Divider />

      <Title>{ t('contact') }</Title>
      <NavItem href={ Routes.contact }>{ t('contact_me.title') }</NavItem>

    </div>
  )

}

export function Navigation() {

  const { state: { initialLoad, toggled }, toggleOn, toggleOff } = useAnimationToggle();

  return (
    <div className="grid relative z-50">
      <NavBar openPanel={ toggleOn } />

      <div className={`grid absolute top-0 left-0 h-screen w-0 
      ${ initialLoad ? styles.initialPanel : toggled ? styles.panelReveal : styles.panelDisappear } overflow-hidden`
      }>
        <NavPanel closePanel={ toggleOff } />
      </div>
    </div>
  )
}