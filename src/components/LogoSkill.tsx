import React from "react";
import styled from "styled-components";

const Logo = styled.svg`
  width: 220px;
  height: 220px;
  path {
    fill: url(#grad1);
  }
  #stop1 {
    animation: change-color1 3s ease-in-out infinite alternate;
  }
  #stop2 {
    animation: change-color2 3s ease-in-out infinite alternate;
  }
  @keyframes change-color1 {
    0% {
      stop-color: fuchsia;
    }
    100% {
      stop-color: red;
    }
  }
  @keyframes change-color2 {
    0% {
      stop-color: purple;
    }
    100% {
      stop-color: green;
    }
  }
`;

const LogoSkill = () => {
  return (
    <Logo
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <linearGradient id="grad1" gradientUnits="userSpaceOnUse">
          <stop id="stop1" offset="0%" />
          <stop id="stop2" offset="100%" />
        </linearGradient>
      </defs>
      <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
    </Logo>
  );
};

export default LogoSkill;
