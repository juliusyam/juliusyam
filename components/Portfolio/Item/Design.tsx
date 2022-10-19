import { Design } from '../../../models/apiModels';
import Image from "next/image";
import {IconButton} from "../../IconButton";
import {faGlobeEurope, faHandshake} from "@fortawesome/free-solid-svg-icons";
import {Routes} from "../../../utilities/routes";
import { Color, Colors } from "../../../utilities/color";
import {useTranslation} from "react-i18next";
import {Namespace} from "../../../utilities/locales";
import {useRouter} from "next/router";
import { Portfolio } from "./Global";

interface DesignItemProps {
  design: Design,
}

export function DesignItem({ design }: DesignItemProps) {

  const { id, attributes: { image, title, brief, client, products } } = design;

  const { push } = useRouter();

  const { t } = useTranslation(Namespace.common);

  return (
    <Portfolio.Container key={ id }>
      <Portfolio.ImageContainer>
        <div className="w-full h-full overflow-hidden">
          <Image src={ image.data.attributes.url }
                 layout="responsive"
                 objectFit="cover" width="500" height="400" />
        </div>
      </Portfolio.ImageContainer>

      <Portfolio.ContentContainer>
        <Portfolio.Title color="text-jy-green">{ title }</Portfolio.Title>
        <Portfolio.Brief color="text-gray-300">{ brief }</Portfolio.Brief>
        <Portfolio.Brief color="text-gray-600">{ products }</Portfolio.Brief>

        <Portfolio.ButtonContainer>
          <IconButton icon={ faGlobeEurope }
                      className="mr-4 mb-4"
                      colorGroup={ Colors[Color.green] }
                      onClick={ () => push(Routes.design(id)) }>
            { t('view_product') }
          </IconButton>
          {
            client &&
            <IconButton icon={ faHandshake }
                        className="mr-4 mb-4"
                        colorGroup={ Colors[Color.green] }
                        onClick={ () => push(Routes.clients) }>
              { t('client') }
            </IconButton>
          }
        </Portfolio.ButtonContainer>
      </Portfolio.ContentContainer>
    </Portfolio.Container>
  )
}