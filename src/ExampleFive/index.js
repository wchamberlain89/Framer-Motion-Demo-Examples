import React from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Square = () => {
  const { ref, inView } = useInView({
    rootMargin: '50px',
    triggerOnce: true
  })
  return (
    <motion.div animate={{ x: inView ? 0 : 200 }} transition={{ delay: 0.1, duration: 1.5 }} className='square' ref={ref}>

    </motion.div>
  )
}

const ExampleFive = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true,
    rootMargin: '-200px'
  });
  return (
    <div className='example-container' id='example-five'>
      <motion.h2 animate={{ x: inView ? 200 : 0 }} ref={ref} >Example 5</motion.h2>
      {[0,1,2,3,4,5].map( item => (
        <Square key={item} />
      ))}
    </div>
  );
};

export default ExampleFive;