import {ExperienceLevel, Tech} from '../models/apiModels';
import Image from 'next/image';

interface TechItemProps {
  tech: Tech,
}

export function TechItem({ tech }: TechItemProps) {

  return (
    <div className="grid grid-cols-tech justify-start items-center my-4 gap-4">
      <div className="rounded-lg overflow-hidden">
        <Image src={ tech.attributes.image.data.attributes.url }
               width="300"
               height="150"
               objectFit="cover"
               layout="responsive"
        />
      </div>

      <div className="grid w-1/2">
        <h4 className="font-ocr text-2xl mb-4">{ tech.attributes.title }</h4>
        <ExperienceIndicator experienceLevel={ tech.attributes.experienceLevel } />
      </div>
    </div>
  )
}

function ExperienceIndicator({ experienceLevel }: { experienceLevel: ExperienceLevel }) {

  let color: string;
  let width: string;

  switch (experienceLevel) {
    case ExperienceLevel.limited:
      color = 'bg-jy-red';
      width = 'w-1/3';
      break;
    case ExperienceLevel.moderate:
      color = 'bg-jy-lime';
      width = 'w-2/3';
      break;
    case ExperienceLevel.proficient:
      color = 'bg-jy-green';
      width = 'w-full';
  }

  return (
    <div className={`h-2 rounded-full ${ width } ${ color }`} />
  )
}