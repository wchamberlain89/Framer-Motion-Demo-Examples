import React from 'react';
import { AnimateSharedLayout } from 'framer-motion'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import CardList from './CardList'
import data from './data'

const ExampleThree = () => {
  return (
    <AnimateSharedLayout type='crossfade'>
      <div className="example__container" id="example-three">
        <h2>Example Three</h2>
        <Router>
          <Route path={['/:id', '/']} component={(props) => <CardList {...props} data={data}/>} />
        </Router>
      </div>
    </AnimateSharedLayout>
  );
};

export default ExampleThree;