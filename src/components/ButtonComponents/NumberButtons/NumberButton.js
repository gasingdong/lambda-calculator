import React from "react";

const NumberButton = ({num, state, setState}) => {

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
       <button className={num === '0' ? "zero" : "regularNumber"} onClick={() => {
         const reset = state.total === '0' || (state.operator.operator && state.operator.operator.value === '=');
         const newState = (!state.operator.operator || reset)
         ? {...state, total: reset ? "" + num : "" + state.total + num} 
         : {...state, next: state.next === '0' ? "" + num : "" + state.next + num};

         if (reset) {
           newState.operator = {};
         }
         return setState(newState);
        }}>{num}</button>
      }
    </>
  );
};

export default NumberButton;
