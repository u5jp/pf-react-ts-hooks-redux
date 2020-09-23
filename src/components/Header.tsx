import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { Link } from "react-router-dom";

import styled from "styled-components";
import media from "styled-media-query";

type Props = {
  className: string;
};

const Header: React.FC<Props> = ({ className }) => {
  const context: any = useContext(AppContext);

  return (
    <nav className={className}>
      <ul>
        <li>
          <Link to={""}>Top</Link>
        </li>
        {context.stateProvided.introductions.map((introduction, index) => (
          <li key={index}>
            <Link to={`/${introduction.title}`}>{introduction.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const HeaderStyled = styled(Header)`
  background-color: rgba(38, 46, 49, 1);
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  left: 0px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 10000;
  ${media.greaterThan("medium")`
    justify-content: flex-end;
  `}
  > ul {
    display: flex;
    ${media.greaterThan("medium")`
      padding-right: 100px;
    `}
    > li {
      position: relative;
      &:not(:last-child):after {
        content: "";
        position: absolute;
        height: 50%;
        right: 0%;
        bottom: 50%;
        transform: translateY(50%);
        border-right: 1px solid #fff;
      }
      a {
        width: 100px;
        padding: 15px;
        display: block;
      }
    }
  }
`;

export default HeaderStyled;
