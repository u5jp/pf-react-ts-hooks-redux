import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../contexts/AppContext";

import styled from "styled-components";
import media from "styled-media-query";

type Props = {
  className: string;
};

const BackButton: React.FC<Props> = ({ className }) => {
  const context: any = useContext(AppContext);
  return (
    <div className={`${className} ${context.key !== "" && "visivle"}`}>
      <Link to={"/"}>
        <i className={`fas fa-arrow-circle-left ${className}_arrow`}></i>
        <p>トップへ戻る</p>
      </Link>
    </div>
  );
};

const BackButtonStyled = styled(BackButton)`
  z-index: 1000;
  position: fixed;
  bottom: 10%;
  right: 5%;
  transform: translateX(1000px);
  transition: 2s;
  transition-delay: 1s;
  &.visivle {
    transform: translateX(0);
    transition-delay: 2s;
  }
  &_arrow::before {
    font-size: 46px;
    ${media.lessThan("medium")`
      font-size: 40px;
    `}
  }
  p {
    margin-top: 5px;
    font-size: 14px;
  }
`;

export default BackButtonStyled;
