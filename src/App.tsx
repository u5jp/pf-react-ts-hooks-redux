import React, { useReducer, useEffect, useState } from "react";
import "./App.css";

import AppContext from "./contexts/AppContext";
import rootReducer from "./reducers/index";

import { useLocation, Route, Switch } from "react-router-dom";

import Main from "./components/Main";
import Skill from "./components/Skill";
import Profile from "./components/Profile";
import Header from "./components/Header";
import BackButton from "./components/BackButton";
import BackGround from "./components/BackGround";

import initialState from "./initialState";

import reset from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

import { AnimatePresence, motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{box-sizing: border-box;}
  *{color:#fff}
  a{
    text-decoration: none;
    display:block;
  }
  li{list-style: none;}
  .displayNone_PC{
    ${media.greaterThan("medium")`
      display:none;
    `}
  }
  .displayNone_SP{
    ${media.lessThan("medium")`
      display:none;
    `}
  }
`;

const Section = styled.section`
  padding-top: 70px;
  position: relative;
  z-index: 10;
  pointer-events: none;
`;

const getQuery = (search) => {
  const searchParams = new URLSearchParams(search);
  return Object.fromEntries(searchParams);
};

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const location = useLocation();
  const [_, rootPath] = location.pathname.split("/");
  const queryParams = getQuery(location.search);
  const dialog = Object.keys(queryParams).includes("dialog");

  const [isIPhone, setIsIPhone] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.indexOf("iPhone") > 0) setIsIPhone(true);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <AppContext.Provider
        value={{
          stateProvided: state,
          dispatchProvided: dispatch,
          location: location,
          key: rootPath,
          isIPhone,
        }}
      >
        {/* <HashRouter> */}
        {/* github用にBrowserRouterを代替*/}
        <BackGround />
        <Header />
        <Section>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={rootPath}>
              {/* <Switch> */}
              <Route exact path="/" component={Main} />
              <Route exact path="/skill" component={Skill} />
              <Route exact path="/profile" component={Profile} />
              {/* <Route path="/hobby" component = {Hobby}/> */}
            </Switch>
          </AnimatePresence>
        </Section>
        <BackButton />
        {/* </HashRouter> */}
      </AppContext.Provider>
    </div>
  );
};

export default App;
