import React from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Square = ({ id }) => {
  return (
    <div className='square-container' layoutId={`square-container-${id}`}>
      <motion.li className='square' 
        layoutId={`square-${id}`}
      >
        <Link to={`/square/${id}`} className={'expanded-card-link'}/>
      </motion.li>
    </div>
  )
}

const AnimatedSquare = ({ id }) => {
  return <div className='square-container animated-square open'
    layoutId={`square-container-${id}`}
    >
          <motion.li className='square'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.2, delay: 0.15 }}
            style={{ pointerEvents: "auto" }}
            layoutId={`square-${id}`}
            >
            <Link to={`/`} className={'expanded-card-link'}>
            </Link>
        </motion.li>
    </div>
}

const ExampleFour = () => {
  const SquareList = ({ match }) => {
    React.useEffect( () => {
      return console.log('unmounting square')
    })
    const { id } = match.params;
    return (
      <ul>
        {[0, 1, 2, 3].map( ( item, id ) => (
          
            <Square key={id} id={id}/>
          
        ))}
        {/*Conditially show if route params  */}
          <AnimatePresence>
          {id && <AnimatedSquare key={`square-${id}`} id={id}/>
            }
          </AnimatePresence>
      </ul>
    )
  }

  return (
    <AnimateSharedLayout>
      <div className="example__container" id="example-four">
        <h2>Example 4</h2>
        <Router>
          <Route path={['/square/:id', '/']} component={SquareList} />
        </Router>
      </div>
    </AnimateSharedLayout>
  );
};

export default ExampleFour