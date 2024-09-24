import React from "react";
import "./authButton.css";

import GoogleIcon from "../../assets/google_svg.png";
import GithubIcon from "../../assets/github_svg.png";

interface AuthButtonProps {
  authService: string;
}

const AuthIcons: { [key: string]: string } = {
  Google: GoogleIcon,
  Github: GithubIcon,
};

export const AuthButton: React.FC<AuthButtonProps> = ({ authService }) => {
  const authIcon = AuthIcons[authService] || null;
  return (
    <div className="authButtonBody">
      {authIcon && <img src={authIcon} className="authIcon" />}
      <p>Sign in with {authService}</p>
    </div>
  );
};

export default AuthButton;
