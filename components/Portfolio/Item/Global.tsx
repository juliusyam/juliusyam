import {ChildrenProps, StringChildrenProps} from "../../../models";
import {formatMonthAndYear} from "../../../utilities/date";
import {motion, useAnimation, useInView, AnimatePresence} from "framer-motion";
import {useRef} from "react";

interface KeyProps extends ChildrenProps {
  key: number,
}

interface OptionalClassProps extends ChildrenProps {
  className?: string
}

interface TextColorProps extends StringChildrenProps {
  color: string,
}

interface DateDisplayProps {
  startedAt: Date,
  endedAt: Date,
  color: string,
}

const Container = ({ children, key }: KeyProps) => {

  const animate = useAnimation();

  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);

  if(inView) {
    animate.start({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
      }
    })
  } else {
    animate.start({
      opacity: 0,
      y: 200,
      transition: {
        delay: 0.3,
      }
    })
  }

  return (
    <AnimatePresence>
      <motion.div className="flex justify-start items-center flex-col md:flex-row"
                  ref={ ref }
                  initial={ {
                    y: -200,
                    opacity: 0,
                  } }
                  animate={ animate } key={ key }>
        { children }
      </motion.div>
    </AnimatePresence>
  )
};

const ImageContainer = ({ className, children }: OptionalClassProps) => (
  <div className={`max-w-md w-full p-2 pt-8 relative ${ className }`}>
    { children }
  </div>
)

const ContentContainer = ({ className, children }: OptionalClassProps) => (
  <div className={`mt-8 md:mt-0 md:ml-8 ${ className }`}>
    { children }
  </div>
)

const Title = ({ children, color }: TextColorProps) => (
  <h2 className={`font-ocr text-3xl md:text-5xl mb-3 ${ color }`}>
    { children }
  </h2>
)

const Brief = ({ children, color }: TextColorProps) => (
  <h3 className={`font-tomorrow text-xl md:text-2xl ml-1 my-3 ${ color }`}>
    { children }
  </h3>
)

const Description = ({ children }: StringChildrenProps) => {
  const paragraphs = children.split('\n');
  return (
    <>
      {
        paragraphs.map((p, i) => (
          <p key={ i } className="font-tomorrow leading-5 md:leading-7 text-sm md:text-base text-gray-400 ml-1 mb-3">
            { p }
          </p>
        ))
      }
    </>
  )
}

const ButtonContainer = ({ children, className }: OptionalClassProps) => (
  <div className={`flex justify-left items-center flex-wrap ${ children ? 'mt-10' : ''} w-fit ${className}`}>
    {children}
  </div>
)

const DateDisplay = ({ startedAt, endedAt, color }: DateDisplayProps) => (
  <h5 className={`font-tomorrow text-xl md:text-2xl ml-1 mb-5 ${ color }`}>
    { formatMonthAndYear(startedAt) } - { formatMonthAndYear(endedAt) }
  </h5>
)

export class Portfolio {
  static Container = Container;
  static ImageContainer = ImageContainer;
  static ContentContainer = ContentContainer;
  static ButtonContainer = ButtonContainer;
  static Title = Title;
  static Brief = Brief;
  static Description = Description;
  static DateDisplay = DateDisplay;
}
