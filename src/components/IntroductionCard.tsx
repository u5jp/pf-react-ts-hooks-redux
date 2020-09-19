import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LogoHuman from "./LogoHuman";
import LogoSkill from "./LogoSkill";

const Card = styled.li`
  width: 30%;
  &:hover {
    opacity: 0.8;
  }
  h2 {
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 26px;
  }
  p {
    font-size: 18px;
  }
`;

const IntroductionCard = ({ introduction }) => {
  console.log(introduction);
  return (
    <Card>
      <Link to={`/${introduction.title}`}>
        {introduction.title == "profile" && <LogoHuman />}
        {introduction.title == "skill" && <LogoSkill />}
        {/* <Icon src={`${process.env.PUBLIC_URL}/icons/${introduction.title}.svg`} /> */}
        <h2>{introduction.title}</h2>
        <p>{introduction.body}</p>
      </Link>
    </Card>
  );
};

export default IntroductionCard;