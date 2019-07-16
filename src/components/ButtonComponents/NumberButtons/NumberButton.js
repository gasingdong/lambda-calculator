import React from "react";

const NumberButton = ({number, numberHandler}) => {

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
       <button className={number === '0' ? "zero" : "regularNumber"} onClick={() => numberHandler(number)}>{number}</button>
      }
    </>
  );
};

export default NumberButton;
