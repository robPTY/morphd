import React from "react";
import "./largeButton.css";

interface LargeButtonProps {
  buttonText: string;
}

export const LargeButton: React.FC<LargeButtonProps> = ({ buttonText }) => {
  return (
    <div className="largeButtonBody">
      <p>{buttonText}</p>
    </div>
  );
};

export default LargeButton;
