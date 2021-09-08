import React from 'react';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const List = ({ data }) => {
  const { ref, inView } = useInView();

  const listVariants = {
    hidden: {
      opacity: 0
    },
    showing: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.08
      }
    }
  }

  const listItemVariants = {
    showing: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35
      }
    },
    hidden: {
      opacity: 0,
      y: 40
    }
  }

  return (
    <motion.ul initial='hidden' animate={`${inView ? 'showing' : ''}`} variants={listVariants} ref={ref}>
      { data.map( item => <Item variants={listItemVariants} id={ item + 1 } key={item}/>) }
    </motion.ul>
  )
}

const Item = ({ variants, id }) => {
  return (
    <motion.li variants={variants} className='square'>
      <div>
        {  id  }
      </div>
    </motion.li>
  )
}



const ExampleSix = () => {
  const dataArraySize = 30
  const data = Array.apply(null, Array(dataArraySize)).map(function (x, i) { return i; })
  
  return (
    <div className='example-container' id='example-five'>
      <h2>Example Six</h2>
      <List data={data}/>
    </div>
  );
};

export default ExampleSix;