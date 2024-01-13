// FloatingShapesWrapper.js

import React from 'react';
import FloatingShapes from './name-animations/FloatingShapes';

function FloatingShapesWrapper({ handleSetIsLoading }) {
  return (
    <div className="floating-shapes-wrapper">
      <FloatingShapes handleSetIsLoading={handleSetIsLoading} />
    </div>
  );
};

export default FloatingShapesWrapper;