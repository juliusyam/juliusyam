import {useViewport, Width} from "../hooks/useViewport";

interface JuliusYamProps {
  fontSize?: string,
  textAlign?: string,
}

export default function JuliusYam({ fontSize, textAlign }: JuliusYamProps) {

  const size: string = fontSize || 'text-2xl';
  const align: string = textAlign || 'text-left';
  const mainClassAttrs = `${ size } ${ textAlign } font-ocr uppercase absolute text-right`;

  return (
    <div className="m-4">
      <div className="relative flex">
        <h1 className={`${ mainClassAttrs } top-0.5 text-jy-cyan`}>Julius Yam</h1>
        <h1 className={`${ mainClassAttrs } left-0.5 text-jy-lime`}>Julius Yam</h1>
        <h1 className={ mainClassAttrs }>Julius Yam</h1>
      </div>
    </div>

  )
}

export function JuliusYamLanding() {

  const { views: { smallMobile, mobile } } = useViewport();

  const getFontSize = (): string => {
    if (smallMobile) {
      return "text-3xl";
    } else if (mobile) {
      return "text-5xl";
    } else {
      return "text-8xl";
    }
  }


  return <JuliusYam fontSize={ getFontSize() } textAlign="text-right" />
}