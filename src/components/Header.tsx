import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.nav`
  background-color: rgba(38, 46, 49, 1);
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  left: 0px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 10000;
  a {
    color: #fff;
  }
  > ul {
    display: flex;
    padding-right: 100px;
    > li {
      width: 100px;
      padding: 15px;
    }
  }
`;

const Header = () => {
  const value: any = useContext(AppContext);

  const location = useLocation();
  const [_, rootPath] = location.pathname.split("/");
  console.log(location);

  return (
    <Nav>
      <ul>
        <li>
          <Link to={""}>top</Link>
        </li>
        {value.stateProvided.introductions.map((introduction, index) => (
          <li key={index}>
            <Link to={`/${introduction.title}`}>{introduction.title}</Link>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default Header;
