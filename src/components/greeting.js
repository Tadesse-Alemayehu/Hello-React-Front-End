import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateGreeting } from '../Redux/reducers/Greeting/greeting';

export default function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.Greeting);
  return (
    <div>
      <h1>{greeting}</h1>
      <br />
      <br />
      <button onClick={() => dispatch(generateGreeting())} type="button">
        Click here to greet
      </button>
    </div>
  );
}
