import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const animationTime = {
  enter: 400,
  exit: 1000
};



const modal = props => {

  // const classes = ['Modal', props.show === 'entering' ? 'ModalOpen' : props.show === 'exiting' ? 'ModalClosed' : null];

  return (
    // <Transition mountOnEnter unmountOnExit in={props.show} timeout={animationTime}>
    //   {state => {
    //     const classes = ['Modal', state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClosed' : null];

    //     return (
    //       <div className={classes.join(' ')}>
    //         <h1>A Modal</h1>
    //         <button className='Button' onClick={props.closed}>Dismiss</button>
    //       </div>
    //     )
    //   }}
    // </Transition>
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTime}
      // classNames="fade-teste"
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClosed'
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className='Button' onClick={props.closed}>Dismiss</button>
      </div>
    </CSSTransition>
  );
};

export default modal;