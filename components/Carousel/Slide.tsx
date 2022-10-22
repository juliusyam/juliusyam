import {ChildrenProps} from "../../models";
import {PanInfo, motion, MotionStyle, MotionValue} from "framer-motion";

interface SlideProps extends ChildrenProps {
  index: number,
  motionValue: MotionValue<number>,
  onDragStart: (e: Event, dragProps: PanInfo) => void,
  onDragEnd: (e: Event, dragProps: PanInfo) => void,
}

export function Slide({ index, motionValue, onDragStart, onDragEnd, children }: SlideProps) {

  const style: MotionStyle = {
    x: motionValue,
    left: `${ index * 100 }%`,
    right: `${ index * 100 }%`,
    width: "100%",
    height: "100%",
    display: "inline-block",
    flex: "none",
  }

  return (
    <motion.div style={ style }
                drag="x"
                dragElastic={ 0.3 }
                onDragStart={ onDragStart }
                onDragEnd={ onDragEnd }>
      { children }
    </motion.div>
  )
}