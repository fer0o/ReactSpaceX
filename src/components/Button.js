import React from "react";

//props son objetos
const Button = (props) => {
  //console.log(props);

  return (
    <button className="btn-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
