import React from 'react';
import { motion } from 'framer-motion'

const containerVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 1
    }
  },
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1
    }
  },
  hover: {
    scale: 3,
    rotate: 180,
    transition: {
      duration: 0.5
    }
  }
}

const itemVariants = {
  visible: {
    opacity: 1,
    scale: 1
  },
  hidden: {
    opacity: 0,
    scale: 0
  }
}

const ExampleTwo = () => {
  return (
    <div className='example__container' id='example-two'>
      <h2>Example Two</h2>
      <div className="square">

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{
            duration: 0.56
          }}
          >
          {[0, 1, 2, 3].map(index => (
            <motion.li className='inner-dot'
            key={index}
            variants={itemVariants}
            >

            </motion.li>
            ))}
        </motion.ul>
        </div>
    </div>
  );
};

export default ExampleTwo;