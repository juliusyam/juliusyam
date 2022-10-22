import {ChildrenProps} from "../../models";
import {PanInfo, motion, MotionStyle, MotionValue} from "framer-motion";

interface SlideProps extends ChildrenProps {
  index: number,
  motionValue: MotionValue<number>,
  onDragEnd: (e: Event, dragProps: PanInfo) => void
}

export function Slide({ index, motionValue, onDragEnd, children }: SlideProps) {

  const style: MotionStyle = {
    x: motionValue,
    left: `${ index * 100 }%`,
    right: `${ index * 100 }%`,
  }

  return (
    <motion.div className="w-full h-full inline-block flex-none"
                style={ style }
                drag="x"
                dragElastic={ 0.3 }
                onDragEnd={ onDragEnd }>
      { children }
    </motion.div>
  )
}