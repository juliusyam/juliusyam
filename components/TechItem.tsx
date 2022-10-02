import { Tech } from '../models/apiModels';
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

      <div>
        <h4 className="font-ocr text-2xl">{ tech.attributes.title }</h4>
      </div>
    </div>
  )
}