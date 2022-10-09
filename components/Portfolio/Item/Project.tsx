import {Project} from "../../../models/apiModels";
import { Portfolio } from "./Global";
import Image from "next/image";
import {IconButton} from "../../IconButton";
import {faGlobeEurope} from "@fortawesome/free-solid-svg-icons/faGlobeEurope";
import {Color, Colors} from "../../../utilities/color";
import Link from "next/link";

interface ProjectItemProps {
  project: Project,
}

export function ProjectItem({ project }: ProjectItemProps) {

  const { attributes: { image, title, brief, description, link, originLink, startedAt, endedAt } } = project;

  return (
    <Portfolio.Container>
      <Portfolio.ImageContainer>
        <div className="w-full h-full overflow-hidden">
          <Image src={ image.data.attributes.url }
                 layout="responsive"
                 objectFit="cover" width="500" height="400" />
        </div>
      </Portfolio.ImageContainer>

      <Portfolio.ContentContainer>
        <Portfolio.Title color="text-jy-red">{ title }</Portfolio.Title>
        <Portfolio.Brief color="text-gray-300">{ brief }</Portfolio.Brief>
        <Portfolio.Brief color="text-gray-600">{ description }</Portfolio.Brief>

        <Portfolio.ButtonContainer>
          {
            link &&
            <Link href={ link } passHref>
              <a target="_blank" rel="noopener noreferrer">
                <IconButton icon={ faGlobeEurope }
                            className="mr-4 mb-4"
                            colorGroup={ Colors[Color.red] }>
                  View product
                </IconButton>
              </a>
            </Link>
          }
          {
            originLink &&
            <Link href={ originLink } passHref>
              <a target="_blank" rel="noopener noreferrer">
                <IconButton icon={ faGlobeEurope }
                            className="mr-4 mb-4"
                            colorGroup={ Colors[Color.red] }>
                  View original tutorial
                </IconButton>
              </a>
            </Link>
          }
        </Portfolio.ButtonContainer>
      </Portfolio.ContentContainer>
    </Portfolio.Container>
  )
}