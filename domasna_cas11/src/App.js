import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';
import AsyncIncrement from './redux/AsyncIncrement';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <AsyncIncrement /> 
    </div>
  );
}

export default App;



