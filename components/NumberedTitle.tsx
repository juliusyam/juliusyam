interface NumberedTitleProps {
  slideNumber: string,
  title: string,
}

export function NumberedTitle({ slideNumber, title }: NumberedTitleProps) {

  return (
    <section className="grid">
      <h2 className="font-ocr text-4xl md:text-6xl lg:text-9xl text-left md:text-right">
        { slideNumber }
      </h2>
      <h3 className="font-ocr text-3xl md:text-5xl lg:text-6xl text-jy-lime-300 text-left md:text-right">
        { title }
      </h3>
    </section>
  )
}