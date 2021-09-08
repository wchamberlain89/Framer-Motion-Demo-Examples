import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const imageMotion = {
  hover: {
    scale: 1.05
  }
}

const titleMotion = {
  hover: {
    opacity: 1,
    scale: 1.1
  },
}

const overlayMotion = {
  hover: {
    opacity: 1
  },
}

const Card = ({
  id,
  title,
  category
}) => {
  const CardOverlay = () => {
    return (
      <motion.div className="card__overlay"
        initial={{ opacity: 0 }}
        variants={overlayMotion}
      >
      </motion.div>
    )
  }
  
  return(
    <motion.li className="card"
      layoutId={`card-container-${id}`}
      whileHover='hover'
    >
        <div className='card-title-container'>
          <motion.h5 className='card-title'
            initial={{ opacity: 0 }}
            variants={ titleMotion }
            >
            {title}
          </motion.h5>
        </div>
        <motion.div className='card-image-container'
          layoutId={`card-image-container-${id}`}
        >
          <motion.img
              className='card-image'
              src={`assets/images/Optimized-0${id}.jpg`}
              alt='blog post'
              variants={imageMotion}
              layoutId={`card-image-${id}`}
          />
        </motion.div>
        <CardOverlay />
        <Link to={`${id}`} className={'expanded-card-link'}/>
    </motion.li>
  )
}

export default Card