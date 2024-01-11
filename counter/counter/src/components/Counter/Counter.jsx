import { useState, useCallback, useMemo, useEffect } from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';
import CounterHistory from './CounterHistory.jsx';

function isPrime(number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const Counter =  ({ initialCount }) => {
  log('<Counter /> rendered', 1);
  const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);

  const [counter, setCounter] = useState([{value : initialCount, id : Math.random() * 1000}]);
  const currentCounter = counter.reduce((acc,cur)=>acc+cur.value,0);
  
  // useEffect(()=>{
  //   setCounter([{value : initialCount, id : Math.random() * 1000}]);
  // },[initialCount]);
  
  const handleDecrement = useCallback(()=>{
    setCounter((prevCounter) => [{value : -1, id : Math.random() * 1000}, ...prevCounter]);
  },[]);

  const handleIncrement = useCallback(()=>{
    setCounter((prevCounter) => [{value : 1, id : Math.random() * 1000}, ...prevCounter]);
  },[]);

  useEffect(()=>{
    console.log("test");
  },[])

  // function handleDecrement() {
  //   setCounter((prevCounter) => prevCounter - 1);
  // }

  // function handleIncrement() {
  //   setCounter((prevCounter) => prevCounter + 1);
  // }

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counter}/>
    </section>
  );
};

export default Counter;
