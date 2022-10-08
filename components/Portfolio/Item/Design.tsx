import { Design } from '../../../models/apiModels';
import Image from "next/image";
import Link from "next/link";
import {IconButton} from "../../IconButton";
import {faGlobeEurope, faHandshake} from "@fortawesome/free-solid-svg-icons";
import {Routes} from "../../../utilities/routes";
import { Color, Colors } from "../../../utilities/color";
import {useTranslation} from "react-i18next";
import {Namespace} from "../../../utilities/locales";
import {useRouter} from "next/router";

interface DesignItemProps {
  design: Design,
}

export function DesignItem({ design }: DesignItemProps) {

  const { id, attributes: { image, title, brief, client, products } } = design;

  const { push } = useRouter();

  const { t } = useTranslation(Namespace.common);

  return (
    <div className="flex justify-start items-center" key={ id }>
      <div className="max-w-md w-full relative">
        <div className="w-full h-full overflow-hidden">
          <Image src={ image.data.attributes.url }
                 layout="responsive"
                 objectFit="cover" width="500" height="400" />
        </div>
      </div>

      <div className="ml-8">
        <h2 className="font-ocr text-5xl text-jy-green mb-3">{ title }</h2>
        <h3 className="font-tomorrow text-2xl text-gray-300 ml-1 my-3">{ brief }</h3>
        <h3 className="font-tomorrow text-2xl text-gray-600 ml-1 my-3">{ products }</h3>

        <div className="grid gap-3 grid-flow-col mt-10 w-fit">
          <IconButton icon={ faGlobeEurope } colorGroup={ Colors[Color.green] }>{ t('view_product') }</IconButton>
          {
            client &&
            <IconButton icon={ faHandshake } colorGroup={ Colors[Color.green] } onClick={ () => push(Routes.clients) }>
              { t('client') }
            </IconButton>
          }
        </div>
      </div>
    </div>
  )
}