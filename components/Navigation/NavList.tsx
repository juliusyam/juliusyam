import {StringChildrenProps} from "../../models";
import Link from "next/link";
import {withTranslation, WithTranslation} from "next-i18next";
import {Namespace} from "../../utilities/locales";
import {Routes} from "../../utilities/routes";

interface NavItemProps extends StringChildrenProps {
  href: string,
  children: string,
}

interface NavListProps extends WithTranslation {
  closePanel: () => void,
}

function NavList({ closePanel, t }: NavListProps) {

  const Title = ({ children }: StringChildrenProps) => (
    <h4 className="font-ocr text-1xl sm:text-2xl text-jy-cyan mb-4">{ children }</h4>
  )

  const NavItem = ({ href, children }: NavItemProps) => (
    <Link href={ href }>
      <a><h3 className="font-ocr text-white text-2xl sm:text-4xl mb-4 hover:drop-shadow-nav-text">{ children }</h3></a>
    </Link>
  )

  const Divider = () => (
    <div className="mb-10" />
  )

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
      <NavItem href={ Routes.projects }>{ t('experimental_projects.title') }</NavItem>
      <NavItem href={ Routes.digitalArtworks }>{ t('digital_artwork.title') }</NavItem>

      <Divider />

      <Title>{ t('contact') }</Title>
      <NavItem href={ Routes.contact }>{ t('contact_me.title') }</NavItem>

    </div>
  )
}

export default withTranslation(Namespace.common)(NavList);