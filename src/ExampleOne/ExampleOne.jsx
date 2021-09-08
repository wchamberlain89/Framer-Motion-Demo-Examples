import React from 'react';
import { motion } from 'framer-motion'

const ExampleOne = () => {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const containerRef = React.useRef();
  const squareRef = React.useRef();

  const getAnimationWidth = () => {
    const styles = getComputedStyle(containerRef.current);

    const animationWidth = containerRef.current.clientWidth - squareRef.current.clientWidth - parseFloat(styles.paddingRight) - parseFloat(styles.paddingLeft);

    return animationWidth
  }

  return (
    <div className='example__container' id='example-one'>
      <h2>Example One</h2>
      <motion.div className="example-one__container" 
        ref={containerRef}
        onClick={() => setIsAnimating(!isAnimating)}
        >
        <motion.div className="square" ref={squareRef}
          animate={{ x : isAnimating ? getAnimationWidth() : 0 }}
          transition={{ type: 'spring', damping: 55.36, mass: 2, stiffness: 240 }}
          
          >
        </motion.div>

      </motion.div>

    </div>
  );
};

export default ExampleOne;