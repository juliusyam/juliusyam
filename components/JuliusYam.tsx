import { useViewport } from '../hooks/useViewport';

interface JuliusYamProps {
  fontSize?: string,
  textAlign?: string,
}

export default function JuliusYam({ fontSize, textAlign }: JuliusYamProps) {

  const size: string = fontSize || 'text-2xl';
  const align: string = textAlign || 'text-left';
  const mainClassAttrs = `${ size } ${ align } font-ocr uppercase text-right drop-shadow-jy-text`;

  return (
    <div className="relative flex">
      <h1 className={ mainClassAttrs }>Julius Yam</h1>
    </div>
  )
}

export function JuliusYamLanding() {
  return (
    <div className="absolute right-20 top-96">
      <div>
        <JuliusYam textAlign="text-right" fontSize="text-3xl md:text-5xl lg:text-8xl" />
      </div>
    </div>
  )
}