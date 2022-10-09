import {Web} from "../../../models/apiModels";
import Image from "next/image";
import {IconButton} from "../../IconButton";
import { faGlobeEurope, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {Routes} from "../../../utilities/routes";
import {useTranslation} from "react-i18next";
import {Namespace} from "../../../utilities/locales";
import {Color, Colors} from "../../../utilities/color";
import { Portfolio } from "./Global";

interface WebItemProps {
  web: Web,
}

export function WebItem({ web }: WebItemProps) {

  const { attributes: { image, title, brief, technologies, link, client } } = web;

  const { push } = useRouter();

  const { t } = useTranslation(Namespace.common);

  return (
    <Portfolio.Container>
      <Portfolio.ImageContainer className="bg-gray-300 rounded-3xl">
        <div className="absolute w-3 h-3 rounded-xl top-3 left-5 bg-jy-blue" />
        <div className="absolute w-3 h-3 rounded-xl top-3 left-10 bg-jy-blue" />
        <div className="absolute w-3 h-3 rounded-xl top-3 left-15 bg-jy-blue" />

        <div className="w-full h-full rounded-3xl overflow-hidden">
          <Image src={ image.data.attributes.url }
                 layout="responsive"
                 objectFit="cover" width="500" height="300" />
        </div>
      </Portfolio.ImageContainer>

      <Portfolio.ContentContainer>
        <Portfolio.Title color="text-jy-blue">{ title }</Portfolio.Title>
        <Portfolio.Brief color="text-gray-300">{ brief }</Portfolio.Brief>
        <Portfolio.Brief color="text-gray-600">{ technologies }</Portfolio.Brief>

        <Portfolio.ButtonContainer>
          {
            link &&
            <Link href={ link } passHref>
              <a target="_blank" rel="noopener noreferrer">
                <IconButton icon={ faGlobeEurope }
                            className="mr-4 mb-4"
                            colorGroup={ Colors[Color.blue] }>
                  { t('view_site') }
                </IconButton>
              </a>
            </Link>
          }
          {
            client &&
            <IconButton icon={ faHandshake }
                        className="mr-4 mb-4"
                        colorGroup={ Colors[Color.blue] }
                        onClick={ () => push(Routes.clients) }>
              { t('client') }
            </IconButton>
          }
        </Portfolio.ButtonContainer>
      </Portfolio.ContentContainer>
    </Portfolio.Container>
  )
}