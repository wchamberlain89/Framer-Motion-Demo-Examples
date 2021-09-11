import React from 'react';
import { motion } from 'framer-motion'

const marqueeVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 1.5,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      <div className="marquee">
                {/* 3. Using framer motion */}
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h3>
            Let's Work Together. Let's Work Together. Let's Work Together. Let's
            Work Together. Let's Work Together. Let's Work Together. Let's Work
            Together. Let's Work Together. Let's Work Together. Let's Work Together. Let's
            Work Together. Let's Work Together. Let's Work Together. Let's Work
            Together
          </h3>
        </motion.div>
      </div>
    </div>
  );
};


const ExampleEight = () => {
  return (
    <div className='example-container' id='example-eight'>
      <Marquee/>
    </div>
  );
};

export default ExampleEight;