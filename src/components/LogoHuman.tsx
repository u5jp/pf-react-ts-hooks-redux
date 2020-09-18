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

const LogoHuman = () => {
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
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
    </Logo>
  );
};

export default LogoHuman;
