import React from "react";

const OperatorButton = ({operator, state, setState}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
       <button onClick={() => {
         return setState({...state, operator: {operator}});
       }}>{operator['char']}</button>
      }
    </>
  );
};

export default OperatorButton;
