import {Web} from "../../../models/apiModels";
import Image from "next/image";
import {IconButton} from "../../IconButton";
import { faGlobeEurope, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {Routes} from "../../../utilities/routes";

interface WebItemProps {
  web: Web,
}

export function WebItem({ web }: WebItemProps) {

  const { id, attributes: { image, title, brief, technologies, link, client } } = web;

  const { push } = useRouter();

  return (
    <div className="flex justify-start items-center" key={ id }>
      <div className="max-w-md w-full p-2 pt-8 bg-gray-300 rounded-3xl relative">
        <div className="absolute w-3 h-3 rounded-xl top-3 left-5 bg-jy-blue" />
        <div className="absolute w-3 h-3 rounded-xl top-3 left-10 bg-jy-blue" />
        <div className="absolute w-3 h-3 rounded-xl top-3 left-15 bg-jy-blue" />

        <div className="w-full h-full rounded-3xl overflow-hidden">
          <Image src={ image.data.attributes.url }
                 layout="responsive"
                 objectFit="cover" width="500" height="300" />
        </div>
      </div>

      <div className="ml-8">
        <h2 className="font-ocr text-5xl text-jy-blue mb-3">{ title }</h2>
        <h3 className="font-tomorrow text-2xl text-gray-300 ml-1 my-3">{ brief }</h3>
        <h3 className="font-tomorrow text-2xl text-gray-600 ml-1 my-3">{ technologies }</h3>

        <div className="grid gap-3 grid-flow-col mt-10 w-fit">
          {
            link &&
            <Link href={ link } passHref>
              <a target="_blank" rel="noopener noreferrer">
                <IconButton icon={ faGlobeEurope }>View site</IconButton>
              </a>
            </Link>
          }
          {
            client &&
            <IconButton icon={ faHandshake } onClick={ () => push(Routes.clients) }>
              Client
            </IconButton>
          }
        </div>
      </div>
    </div>
  )
}