import React from "react";
import "./input.css";

interface InputProps {
  inputType: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ inputType, placeholder }) => {
  return (
    <input
      className="inputBody"
      type={inputType}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
