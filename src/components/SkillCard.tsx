import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const SkillList = styled.li`
  margin: 0 auto;
  display: flex;
  transition: 2s;
  opacity: 0;
  opacity: ${(props) => props.inView && `1`};
`;

const SkillLevel = styled.div`
  min-width: 200px;
  h3 {
    margin-top: 15px;
    font-weight: bold;
    font-size: 20px;
  }
  p {
    margin-top: 10px;
  }
`;
const LogoWrap = styled.div`
  min-width: 200px;
`;

const Logo = styled.img`
  width: 180px;
  height: 180px;
  padding: 20px;
`;
const SkillBar = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 1rem;
  background: #fff;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 5px 15px 0 rgba(7, 33, 66, 0.15);
  transition: 1s;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border-radius: 10px;
    width: 10%;
    transition: 2s;
    width: ${(props) => props.inView && props.width * 20 + `%`};
    /* background-image: linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a); */
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  }
`;

const SkillCard = ({ skill }) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    // rootMargin: '-50px 0px',
  });

  return (
    <SkillList inView={inView} ref={ref}>
      <LogoWrap>
        <Logo src={`${process.env.PUBLIC_URL}/icons/${skill.name}.svg`} />
        {/* <img src={`${window.location.origin}/icons/${skill.name}.svg`} /> */}
      </LogoWrap>
      <SkillLevel>
        <h3>{skill.name}</h3>
        <p>習熟レベル:{skill.proficiency}</p>
        <SkillBar inView={inView} width={skill.proficiency}></SkillBar>
        <p>興味レベル:{skill.interest}</p>
        <SkillBar inView={inView} width={skill.interest}></SkillBar>
        {/* <h2>{`Header inside viewport ${inView}.`}</h2> */}
      </SkillLevel>
    </SkillList>
  );
};

export default SkillCard;
