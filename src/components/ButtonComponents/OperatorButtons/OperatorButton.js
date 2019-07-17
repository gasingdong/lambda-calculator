import React from "react";

function calculate(operator, total, next) {
  total = parseFloat(total);
  next = parseFloat(next);
  switch (operator.operator.value) {
    case '+': total += next; break;
    case '-': total -= next; break;
    case '*': total *= next; break;
    case '/': total /= next; break;
    default: break;
  }
  return "" + total.toPrecision(12).replace(/.?0+$/,"");
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
