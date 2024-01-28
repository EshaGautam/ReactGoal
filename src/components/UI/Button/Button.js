import React from 'react';

import './Button.css';

const Button = props => {

     const buttonStyle = {
       background: props.buttonColor ? "#8b005d" : "red",
     };

  return (
    <button
      type={props.type}
      className="button"
      style={buttonStyle}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
