import React from "react";
import "./input.css";

interface InputProps {
  inputType: string;
  placeholder: string;
  value: string;
  onChange: any;
}

export const Input: React.FC<InputProps> = ({
  inputType,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      className="inputBody"
      type={inputType}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default Input;
