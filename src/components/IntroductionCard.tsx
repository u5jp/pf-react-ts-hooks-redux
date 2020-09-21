import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LogoHuman from "./LogoHuman";
import LogoSkill from "./LogoSkill";

const IntroductionCard = ({ introduction, className }) => {
  return (
    <li className={className}>
      <Link to={`/${introduction.title}`}>
        {introduction.title === "Profile" && <LogoHuman />}
        {introduction.title === "Skill" && <LogoSkill />}
        {/* <Icon src={`${process.env.PUBLIC_URL}/icons/${introduction.title}.svg`} /> */}
        <h2>{introduction.title}</h2>
        <p>{introduction.body}</p>
      </Link>
    </li>
  );
};

const IntroductionCardStyled = styled(IntroductionCard)`
  padding: 10px 30px;
  width: 40%;
  min-width: 300px;
  &:hover {
    opacity: 0.8;
  }
  h2 {
    margin-top: 15px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 26px;
  }
  p {
    margin-top: 10px;
    font-size: 15px;
  }
`;

export default IntroductionCardStyled;
