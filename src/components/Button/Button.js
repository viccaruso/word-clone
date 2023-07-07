import React from 'react';

function Button({ clickHandler, children }) {
  return (
    <button type="button" onClick={clickHandler}>
      {children}
    </button>
  );
}

export default Button;
