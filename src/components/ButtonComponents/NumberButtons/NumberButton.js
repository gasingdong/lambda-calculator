import React from "react";

const NumberButton = ({number}) => {
  console.log(number);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
       <button className={number === '0' ? "zero" : "regularNumber"}>{number}</button>
      }
    </>
  );
};

export default NumberButton;
