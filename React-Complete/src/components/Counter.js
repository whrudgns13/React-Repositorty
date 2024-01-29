import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import {counterAction} from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();

  const incrementHandler = () =>{
    dispatch(counterAction.increment());
  };

  const increaseHandler = () =>{
    dispatch(counterAction.increase({amount : 5}));
  };

  const decrementHandler = () =>{
    dispatch(counterAction.decrement());
  };

  const counter = useSelector((state)=> {
    return state.counter;
  });
  
  const toggleCounterHandler = () => dispatch(counterAction.toggle());

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
