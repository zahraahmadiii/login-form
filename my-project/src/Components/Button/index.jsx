import React from "react";
import "./style.css";
function Button({ value, onClick, background }) {
  return (
    <button className={`btn ${background}`} onClick={onClick} >
      {value}
    </button>
  );
}
export default Button;
