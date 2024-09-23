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

  const { attributes: { image, title, brief, description, links, startedAt, endedAt }, id } = project;

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
        <Portfolio.Title color="text-jy-red">{ title }</Portfolio.Title>
        <Portfolio.Brief color="text-gray-300">{ brief }</Portfolio.Brief>
        <Portfolio.DateDisplay startedAt={ startedAt } endedAt={ endedAt } color="text-gray-600" />
        <Portfolio.Description>{ description }</Portfolio.Description>

        {
          links?.length > 0 &&
          <Portfolio.ButtonContainer>
            {
              links.map((presence, i) => (
                <Link key={ i } href={ presence.link } passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <IconButton icon={ faGlobeEurope }
                                className="mr-4 mb-4"
                                colorGroup={ Colors[Color.red] }>
                      { presence.label }
                    </IconButton>
                  </a>
                </Link>
              ))
            }
          </Portfolio.ButtonContainer>
        }
      </Portfolio.ContentContainer>
    </Portfolio.Container>
  )
}
