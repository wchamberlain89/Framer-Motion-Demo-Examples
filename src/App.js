import './App.css';
import React from 'react'
import { motion } from 'framer-motion'
import ExampleOne from './ExampleOne/ExampleOne'
import ExampleTwo from './ExampleTwo/ExampleTwo'
import ExampleThree from './ExampleThree/ExampleThree'
import ExampleFour from './ExampleFour/ExampleFour'

function App() {
  return (
    <div className="App">
      <div className='screen__container'>
        <div className='header__container'>
          <h3>Animation Examples With Framer Motion</h3>
        </div>
        <ExampleOne />
        <ExampleTwo />
        <ExampleThree />
        <ExampleFour />
      </div>
    </div>
  );
}


export default App;
