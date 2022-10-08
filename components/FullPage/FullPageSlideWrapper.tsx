import { ChildrenProps } from '../../models';

interface FullPageSlideWrapperProps extends ChildrenProps {
  dataAnchor: string,
  className?: string,
}

export function FullPageSlideWrapper({ className, dataAnchor, children }: FullPageSlideWrapperProps) {
  return (
    <div className={`section relative h-screen ${ className || '' }`} data-anchor={ dataAnchor }>
      { children }
    </div>
  )
}