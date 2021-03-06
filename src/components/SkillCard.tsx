import React from "react";

import styled from "styled-components";
import media from "styled-media-query";

import { useInView } from "react-intersection-observer";

type Props = {
  skill: any;
  className: string;
};

const SkillCard: React.FC<Props> = ({ skill, className }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <View inView={inView} ref={ref} className={className}>
      <div className={`${className}_logoWrap`}>
        <img src={`${process.env.PUBLIC_URL}/icons/${skill.name}.svg`} />
        {/* <img src={`${window.location.origin}/icons/${skill.name}.svg`} /> */}
      </div>
      <div className={`${className}_skillLevel`}>
        <h3>{skill.name}</h3>
        <p>習熟レベル:{skill.proficiency}</p>
        <SkillBar
          className={`${className}_skillBar`}
          inView={inView}
          width={skill.proficiency}
        ></SkillBar>
        <p>興味レベル:{skill.interest}</p>
        <SkillBar
          className={`${className}_skillBar`}
          inView={inView}
          width={skill.interest}
        ></SkillBar>
      </div>
    </View>
  );
};

const View = styled.div`
  transition: 2s;
  opacity: 0;
  opacity: ${(props) => props.inView && `1`};
`;

const SkillBar = styled.div`
  &::after {
    transition: 2s;
    width: 10%;
    width: ${(props) => props.inView && props.width * 20 + `%`};
  }
`;

const SkillCardStyled = styled(SkillCard)`
  margin: 20px auto 0;
  display: flex;
  &_logoWrap {
    > img {
      width: 180px;
      height: 180px;
      padding: 10px;
      ${media.greaterThan("medium")`
        padding:10px 15px;
      `}
    }
  }
  &_skillLevel {
    width: 150px;
    padding: 10px;
    ${media.greaterThan("medium")`
      width: 200px;
      padding:10px 15px;
    `}
    h3 {
      margin-top: 15px;
      font-weight: bold;
      font-size: 20px;
    }
    p {
      margin-top: 12px;
    }
  }
  &_skillBar {
    margin-top: 8px;
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
      background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    }
  }
`;

export default SkillCardStyled;
