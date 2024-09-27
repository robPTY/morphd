import React from "react";
import "./largeButton.css";

interface LargeButtonProps {
  buttonText: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const LargeButton: React.FC<LargeButtonProps> = ({
  buttonText,
  onClick,
}) => {
  return (
    <button className="largeButtonBody" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default LargeButton;
