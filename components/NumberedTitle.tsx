import { motion } from 'framer-motion';

interface NumberedTitleProps {
  slideNumber: string,
  title: string,
}

const whileInView = {
  scale: [0, 0.85, 1],
  opacity: [0, 0, 1],
  x: [150, 150, 0]
}

const titleWhileInView = {
  scale: [0.85, 1],
  opacity: [0, 1],
  x: [250, 0],
}

export function NumberedTitle({ slideNumber, title }: NumberedTitleProps) {

  return (
    <section className="grid">
      <motion.div key={ slideNumber } whileInView={ whileInView } exit={ { x: [0, 150], opacity: [1, 0] } }>
        <h2 className="font-ocr text-xl sm:text-4xl md:text-6xl lg:text-9xl text-left md:text-right">
          { slideNumber }
        </h2>
      </motion.div>

      <motion.div key={ `${ slideNumber }_title` } whileInView={ titleWhileInView } className="max-w-xl">
        <h3 className="font-ocr text-lg sm:text-3xl md:text-5xl lg:text-6xl text-jy-lime-300 text-left md:text-right drop-shadow-text">
          { title }
        </h3>
      </motion.div>
    </section>
  )
}