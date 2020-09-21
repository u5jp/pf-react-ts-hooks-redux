import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../contexts/AppContext";

import styled from "styled-components";

const BackButton = ({ className }) => {
  const context: any = useContext(AppContext);
  return (
    <div className={`${className} ${context.key !== "" && "visivle"}`}>
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
  bottom: 5%;
  right: 5%;
  transform: translateX(1000px);
  transition: 2s;
  transition-delay: 0.5s;
  &.visivle {
    transform: translateX(0);
    transition-delay: 2s;
  }
`;

export default BackButtonStyled;
