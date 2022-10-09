interface JuliusYamProps {
  fontSize?: string,
  textAlign?: string,
  dropShadow?: string,
}

export default function JuliusYam({ fontSize, textAlign, dropShadow }: JuliusYamProps) {

  const size: string = fontSize || 'text-2xl';
  const align: string = textAlign || 'text-left';
  const shadow: string = dropShadow || 'drop-shadow-jy-text';
  const mainClassAttrs = `${ size } ${ align } font-ocr uppercase text-right ${ shadow }`;

  return (
    <h1 className={ mainClassAttrs }>Julius Yam</h1>
  )
}