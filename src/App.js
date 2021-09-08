import './App.css';
import React from 'react'
import ExampleOne from './ExampleOne/ExampleOne'
import ExampleTwo from './ExampleTwo/ExampleTwo'
import ExampleThree from './ExampleThree/ExampleThree'
import ExampleFour from './ExampleFour/ExampleFour'
import ExampleFive from './ExampleFive'
import ExampleSix from './ExampleSix'
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
        <ExampleFive />
        <ExampleSix />
      </div>
    </div>
  );
}


export default App;
