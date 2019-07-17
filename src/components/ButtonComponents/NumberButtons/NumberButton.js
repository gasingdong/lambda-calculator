import React from "react";

const NumberButton = ({num, state, setState}) => {

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
       <button className={num === '0' ? "zero" : "regularNumber"} onClick={() => {
         const newNum = state.next === '0' ? "" + num : "" + state.next + num;
         return setState({...state, next: newNum});
        }}>{num}</button>
      }
    </>
  );
};

export default NumberButton;
