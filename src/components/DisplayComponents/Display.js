import React from 'react';

const Display = props => {
  return (
  <div className="Display">
    <div className="displayText">
     {props.value | '0'}
    </div>
  </div>
  );
};

export default Display;
