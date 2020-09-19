import React, { useReducer } from "react";
import "./App.css";

import AppContext from "./contexts/AppContext";
import rootReducer from "./reducers/index";

import { useLocation, Route, Switch } from "react-router-dom";

import Main from "./components/Main";
import Skill from "./components/Skill";
import Profile from "./components/Profile";
import Header from "./components/Header";

import initialState from "./initialState";

import reset from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";

import { AnimatePresence, motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{box-sizing: border-box;}
  a{
    text-decoration: none;
    color:#000;
  }
  li{list-style: none;}
`;

const Section = styled.section`
  padding-top: 70px;
`;

const getQuery = (search) => {
  const searchParams = new URLSearchParams(search);
  return Object.fromEntries(searchParams);
};

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  console.log("appinitiaasta", initialState);

  const location = useLocation();
  const [_, rootPath] = location.pathname.split("/");
  const queryParams = getQuery(location.search);
  const dialog = Object.keys(queryParams).includes("dialog");

  return (
    <div className="App">
      <GlobalStyle />
      <AppContext.Provider
        value={{ stateProvided: state, dispatchProvided: dispatch }}
      >
        {/* <HashRouter> */}
        {/* github用にBrowserRouterを代替*/}
        <Header />
        <Section>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={rootPath}>
              {/* <Switch> */}
              <Route exact path="/" component={Main} />
              <Route exact path="/skill" component={Skill} />
              <Route path="/profile" component={Profile} />
              {/* <Route path="/hobby" component = {Hobby}/> */}
            </Switch>
          </AnimatePresence>
        </Section>
        {/* </HashRouter> */}
      </AppContext.Provider>
    </div>
  );
}

export default App;
