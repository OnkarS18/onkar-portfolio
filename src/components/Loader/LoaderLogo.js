import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;

    return (
      <svg
        width="240"
        height="80"
        viewBox="0 0 240 80"
        xmlns="http://www.w3.org/2000/svg"
        className={`logo-svg ${theme}`}
      >
        {/* Icon Circle */}
        <circle cx="40" cy="40" r="28" fill="#4F46E5" />
        <text
          x="40"
          y="48"
          textAnchor="middle"
          fontSize="26"
          fontFamily="Poppins, sans-serif"
          fill="white"
          fontWeight="600"
        >
          O
        </text>

        {/* Name Text */}
        <text
          x="80"
          y="46"
          fontSize="26"
          fontFamily="Poppins, sans-serif"
          fill="#ffffff"
          fontWeight="600"
        >
          Onkar
        </text>
        <text
          x="165"
          y="46"
          fontSize="26"
          fontFamily="Poppins, sans-serif"
          fill="#4F46E5"
          fontWeight="600"
        >
          Sorde
        </text>
      </svg>
    );
  }
}

export default LogoLoader;
