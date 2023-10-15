import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementAsync } from './actions';

function AsyncIncrement() {
  const dispatch = useDispatch();

  const handleAsyncIncrement = () => {
    dispatch(incrementAsync());
  };

  return (
    <div>
      <h2>AsyncIncrement</h2>
      <button onClick={handleAsyncIncrement}>Increment (Async)</button>
    </div>
  );
}

export default AsyncIncrement;
