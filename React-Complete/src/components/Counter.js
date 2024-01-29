import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { useState } from 'react';

const Counter = () => {
  const dispatch = useDispatch();

  const incrementHandler = () =>{
    dispatch({type : "increment"})
  };

  const increaseHandler = () =>{
    dispatch({type : "increase", amount : 5})
  };

  const decrementHandler = () =>{
    dispatch({type : "decrement"})
  };

  const counter = useSelector((state)=> state);
  
  const toggleCounterHandler = () => dispatch({type : "shown"});

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counter.showCounter && <div className={classes.value}>{counter.counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increment by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
