import {motion, useAnimation} from "framer-motion";
import {useState} from "react";

interface NavButtonProps {
  onClick: () => void,
}

export function NavButton({ onClick }: NavButtonProps) {

  const [isHovered, setIsHovered] = useState(false);
  const animate = useAnimation();
  const animate2 = useAnimation();

  if(isHovered) {
    animate.start({
      width: "3.5rem",
    });
    animate2.start({
      width: "3.5rem",
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
                   className="cursor-pointer p-4 relative"
                   whileHover={ { scale: 1.1, borderRadius: 5, backgroundColor: "#272727" } }>

      <div className="absolute top-4 left-4 w-14 h-0.5 bg-gray-300" />

      <motion.div className="absolute top-4 left-4 h-0.5 bg-jy-cyan"
                  initial={ { width: 0 } } animate={ animate } />

      <motion.div className="absolute top-8 left-4 w-14 h-0.5 bg-gray-300" />

      <motion.div className="absolute top-8 left-4 h-0.5 bg-jy-lime"
                  initial={ { width: 0 } } animate={ animate2 } />

      <motion.div className="w-14 h-0.5 mb-2" />
      <motion.div className="w-14 h-0.5 mb-2" />
    </motion.button>
  )
}