import React from "react";

function update(special, state) {
  switch(special) {
    case 'C':
      return {
        total: '0',
        operator: {},
        next: '0',
      };
    case '+/-': {
      if (state.next !== '0') {
        return {...state, next: state.next.charAt(0) === '-' ? state.next.substring(1) : "-" + state.next}
      } else {
        return {...state, total: state.total.charAt(0) === '-' ? state.total.substring(1) : "-" + state.total}
      }
    }
    case '%': {
      break;
    }
    default: return;
  }
}

const SpecialButton = ({special, state, setState}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
       <button onClick={() => {
         return setState(update(special, state));
       }}>{special}</button>
      }
    </>
  );
};

export default SpecialButton;