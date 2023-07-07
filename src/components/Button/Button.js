import React from 'react';

function Button({ className, clickHandler, children }) {
  return (
    <button className={className} type="button" onClick={clickHandler}>
      {children}
    </button>
  );
}

export default Button;
