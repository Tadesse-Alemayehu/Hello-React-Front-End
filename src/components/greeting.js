import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateGreeting } from "../Redux/reducers/Greeting/greeting";
export default function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.Greeting);
  return (
    <div>
      {greeting}
      <button onClick={() => dispatch(generateGreeting())}>
        Click here to greet
      </button>
    </div>
  );
}
