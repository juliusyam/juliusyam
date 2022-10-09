import {ChildrenProps, StringChildrenProps} from "../../../models";

interface OptionalClassProps extends ChildrenProps {
  className?: string
}

interface TextColorProps extends StringChildrenProps {
  color: string,
}

const Container = ({ children }: ChildrenProps) => (
  <div className="flex justify-start items-center flex-col md:flex-row">
    { children }
  </div>
);

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

const ButtonContainer = ({ children, className }: OptionalClassProps) => (
  <div className={`flex justify-left items-center flex-wrap mt-10 w-fit ${ className }`}>
    { children }
  </div>
)

export class Portfolio {
  static Container = Container;
  static ImageContainer = ImageContainer;
  static ContentContainer = ContentContainer;
  static ButtonContainer = ButtonContainer;
  static Title = Title;
  static Brief = Brief;
}