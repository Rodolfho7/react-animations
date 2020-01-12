import React, { useState } from "react";
import { Transition } from 'react-transition-group';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const App = props => {

  const [show, setShow] = useState(false);
  const [block, setBlock] = useState(false);

  // const blockClasses = ['block', block ? 'blockOpen' : 'blockClose'];


  return (
    <div className="App">
      <h1>React Animations</h1>


      <button className="Button" onClick={() => setBlock(prevBlock => !prevBlock)}>Toggle</button>
      <br/>
      <Transition in={block} mountOnEnter unmountOnExit timeout={300}>
        {state =>(
          <div style={{
            backgroundColor: 'red',
            margin: 'auto',
            width: '100px',
            height: '100px',
            opacity: state ==='exiting' ? '0' : '1',
            transition: 'opacity 300ms ease-in' }}>
            <p>{state}</p>
          </div>
        )}
      </Transition>

      {/* <Transition in={show} mountOnEnter unmountOnExit timeout={300}>
        {state => (
          <Modal show={state} closed={() => setShow(prevShow => !prevShow)} />
        )}
      </Transition> */}
      <Modal show={show} closed={() => setShow(prevShow => !prevShow)} />
      <button className="Button" onClick={() => setShow(prevShow => !prevShow)}>Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
      { show && <Backdrop show={show} closed={() => setShow(prevShow => !prevShow)} /> }
    </div >
  );

}

export default App;
