import React from 'react';
import {
  motion,
  useMotionValue,
  useSpring
} from 'framer-motion'

const ExampleSeven = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const cursorX = useMotionValue(-1);
  const cursorY = useMotionValue(-1);
  const scale = useMotionValue(1);

  const springConfig = { damping: 15, stiffness: 120 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  const scaleSpring = useSpring(scale, springConfig)

  const _handleMouse = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    cursorX.set(event.clientX - rect.left);
    cursorY.set(event.clientY - rect.top);
  }

  const _handleMouseEnter = () => {
    scale.set(3)
  }

  const _handleMouseExit = () => {
    scale.set(1)
  }

  return (
    <div className='example-container' id='example-seven'>
      <h2>Example Seven</h2>
      <div className='cursor-playground' onMouseMove={_handleMouse}>
        <motion.div style={{ x: cursorXSpring, y: cursorYSpring, scale: scaleSpring }} transition={{ duration: 0.4 }} className="cursor">
        </motion.div>
       
          <h3 onMouseEnter={_handleMouseEnter}
              onMouseLeave={_handleMouseExit}
          >BE CREATIVE</h3>
    
      </div>
    </div>
  );
};

export default ExampleSeven;