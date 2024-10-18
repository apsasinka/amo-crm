import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../../store/reducers/selectors/getCounterValue/getCounterValue";
import { decrement, increment } from "../../store/reducers/counterReducer";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h3>{value}</h3>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
};

export default Counter;
