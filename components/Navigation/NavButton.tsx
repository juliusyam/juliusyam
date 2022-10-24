import {motion, useAnimation} from "framer-motion";
import {useState} from "react";
import {useViewport} from "../../hooks/useViewport";

interface NavButtonProps {
  onClick: () => void,
}

export function NavButton({ onClick }: NavButtonProps) {

  const [isHovered, setIsHovered] = useState(false);
  const animate = useAnimation();
  const animate2 = useAnimation();

  const { views } = useViewport();

  if(isHovered) {
    animate.start({
      width: views['sm'] ? "2.5rem" : "3.5rem",
    });
    animate2.start({
      width: views['sm'] ? "2.5rem" : "3.5rem",
      transition: {
        delay: 0.15,
      }
    });
  } else {
    animate.start({
      width: 0,
      transition: {
        delay: 0.15,
      }
    });
    animate2.start({
      width: 0,
    });
  }

  return (
    <motion.button onClick={ onClick }
                   onMouseEnter={ () => setIsHovered(true) }
                   onMouseLeave={ () => setIsHovered(false) }
                   className="cursor-pointer p-1 sm:p-4 relative"
                   whileHover={ { scale: 1.1, borderRadius: 5, backgroundColor: "#272727" } }>

      <div className="absolute top-2 sm:top-4 left-1 sm:left-4 w-10 sm:w-14 h-0.5 bg-gray-300" />

      <motion.div className="absolute top-2 sm:top-4 left-1 sm:left-4 h-0.5 bg-jy-cyan"
                  initial={ { width: 0 } } animate={ animate } />

      <div className="absolute top-4 sm:top-8 left-1 sm:left-4 w-10 sm:w-14 h-0.5 bg-gray-300" />

      <motion.div className="absolute top-4 sm:top-8 left-1 sm:left-4 h-0.5 bg-jy-lime"
                  initial={ { width: 0 } } animate={ animate2 } />

      <motion.div className="w-10 sm:w-14 h-0.5 mb-1 sm:mb-2" />
      <motion.div className="w-10 sm:w-14 h-0.5 mb-2" />
    </motion.button>
  )
}

export function NavCloseButton({ onClick }: NavButtonProps) {

  return (
    <motion.button onClick={ onClick }
                   className="cursor-pointer absolute top-7 right-5 bg-opacity-0 h-16 p-2"
                   whileHover={ { scale: 1.1, borderRadius: 5, backgroundColor: "#272727" } }>

      <div className="w-14 h-0.5 bg-gray-300 rotate-45" />
      <div className="w-14 h-0.5 -mt-0.5 bg-gray-300 rotate-135" />
    </motion.button>
  )
}