import React from "react";

function parseValue(value) {
  let newValue = parseFloat(value);
  let isPercent = false;
  if(value.charAt(value.length - 1) === '%') {
    newValue /= 100;
    isPercent = true;
  }
  return {
    value: newValue,
    percent: isPercent,
  }
}

function calculate(operator, total, next) {
  total = parseValue(total).value;
  next = parseValue(next);
  const nextValue = next.value;
  const doPercent = next.percent;
  switch (operator.operator.value) {
    case '+': {
      console.log(next);
      console.log(nextValue * total);
      total += doPercent ? nextValue * total : nextValue; 
      break;
    }
    case '-': {
      total -= doPercent ? nextValue * total : nextValue; 
      break;
    }
    case '*': total *= nextValue; break;
    case '/': total /= nextValue; break;
    default: break;
  }
  return "" + total.toPrecision(12).replace(/\.?0+$/,"");
}

const OperatorButton = ({operator, state, setState}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
       <button onClick={() => {
         if (operator.value === '=') {

           if (state.next === '0') {
             return setState({
               total: state.total,
               operator: {operator},
               next: '0',
             })
           }
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
