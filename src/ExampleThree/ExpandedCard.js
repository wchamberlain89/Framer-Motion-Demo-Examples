import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import cardData from './data'

const ExpandedCard = ({ id }) => {
  const { title } = cardData.find(item => item.id === Number(id));
  
  return (
    <>
    <div className='card-content-container open'>
      <motion.div className='expanded-card'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.05 }}
        exit={{ transition: { duration: 0.5 } }}
        style={{pointerEvents: 'auto' }}
        layoutId={`card-container-${id}`}
        >
      <motion.div>
        <motion.div className='card-image-container'
          layoutId={`card-image-container-${id}`}
          >
          <motion.img
            className='card-image'
            src={`assets/images/Optimized-0${id}.jpg`}
            alt='blog post'
            layoutId={`card-image-${id}`}
            />
        </motion.div>
        <div className='expanded-card-title-container'>
          <h5 className='card-title'
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 50, opacity: 1 }}
            transition={{ delay: 0.4 }}
            >
            { title }
          </h5>
        </div>
        <Link to='/'>
          <div
            className='card--close'
            >Close</div>
        </Link>
        </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default ExpandedCard