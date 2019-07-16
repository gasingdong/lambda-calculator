import React from 'react';

const Display = ({total}) => {
  return (
  <div className="Display">
    <div className="displayText">
     {total}
    </div>
  </div>
  );
};

export default Display;
