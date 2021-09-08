import React from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const cardData = [
  {
    id: 1,
    title: '10 Things about Green Witches',
    category: 'Tips',
  },
  {
    id: 2,
    title: 'Books every witch should read',
    category: 'Recommendations'
  },
  {
    id: 3,
    title: 'Harnessing the moon cycles to become your best self',
    category: 'Techniques'
  },
  {
    id: 4,
    title: 'Beginners guide to tarot',
    category: 'Guides'
  }
]

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

const Header = () => {
  return <h2>Example Three</h2>
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
        <div className='card-image-container'
          layoutId={`card-image-container-${id}`}
        >
          <img
              className='card-image'
              src={`assets/images/Optimized-0${id}.jpg`}
              alt='blog post'
              variants={imageMotion}
              
          />
        </div>
        {/* <CardOverlay /> */}
        <Link to={`${id}`} className={'expanded-card-link'}/>
    </motion.li>
  )
}

const ExpandedCard = ({ id }) => {
  const { title } = cardData.find(item => item.id === Number(id));
  
  return (
    <>
    <div className='card-content-container open'>
      <motion.div className='expanded-card'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ transition: { duration: 2.8 } }}
        style={{pointerEvents: 'auto' }}>
      <motion.div>
        <motion.div className='card-image-container'
          layoutId={`card-image-container-${id}`}
          >
          <img
            className='card-image'
            src={`assets/images/Optimized-0${id}.jpg`}
            alt='blog post'
            
            />
        </motion.div>
        <div className='expanded-card-title-container'>
          <motion.h5 className='card-title'
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 50, opacity: 1 }}
            transition={{ delay: 0.4 }}
            >
            { title }
          </motion.h5>
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

const CardList = ({ match }) => {
  let { id } = match.params;
  console.log('id is ', id)
  return (
    <>
      <ul className='card-list'>
        {cardData.map( card => {
          return(
              <Card
                key={card.id}
                {...card}
              />
            )
          })}
          
          <AnimatePresence type='crossfade'>
            {id && <ExpandedCard key={`item-${id}`} id={id} />}
          </AnimatePresence>
          
          
      </ul>
    </>
  )
}

const ExampleThree = () => {
  return (
    <AnimateSharedLayout>
      <div className="example__container" id="example-three">
        <Header />
        <Router>
          <Route path={['/:id', '/']} component={CardList} />
        </Router>
      </div>
    </AnimateSharedLayout>
  );
};

export default ExampleThree;