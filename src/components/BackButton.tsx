import React from "react";
import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";

const BackButton = ({ className }) => {
  const location = useLocation();
  const [_, rootPath] = location.pathname.split("/");
  console.log(location);
  return (
    <div className={`${className} ${rootPath !== "" && "visivle"}`}>
      <Link to={"/"}>
        <div>
          <i className="fas fa-arrow-circle-left fa-3x"></i>
          トップページへ戻る
        </div>
      </Link>
    </div>
  );
};

const BackButtonStyled = styled(BackButton)`
  position: fixed;
  bottom: 10%;
  right: 10%;
  transform: translateX(1000px);
  transition: 2s;
  transition-delay: 1s;
  &.visivle {
    transform: translateX(0);
  }
`;

export default BackButtonStyled;
