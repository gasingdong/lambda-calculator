import React from "react";

function calculate(operator, total, next) {
  total = parseFloat(total);
  next = parseFloat(next);
  if (operator.operator.value === '+') {
    total += next;
  }
  return "" + total;
}

const OperatorButton = ({operator, state, setState}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
       <button onClick={() => {
         if (operator.value === '=') {
           return setState({
             total: calculate(state.operator, state.total, state.next),
             operator: {operator},
             next: '0',
           })
         }
         return setState({...state, operator: {operator}});
       }}>{operator.char}</button>
      }
    </>
  );
};

export default OperatorButton;
