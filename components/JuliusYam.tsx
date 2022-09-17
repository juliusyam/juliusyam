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