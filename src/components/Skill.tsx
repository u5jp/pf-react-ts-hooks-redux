import React, { useContext } from "react";
import SkillCard from "./SkillCard";
import AppContext from "../contexts/AppContext";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { AnimatePresence, motion } from "framer-motion";

const SkillUl = styled.ul`
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
`;

const Skill = () => {
  const value: any = useContext(AppContext);
  return (
    <motion.div
      animate={{
        rotateY: 0,
        // x: 0,
        opacity: 1,
      }}
      initial={{
        rotateY: 90,
        // x: 500,
        opacity: 0,
      }}
      exit={{
        rotateY: -90,
        // x: -500,
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div>
        <h2>Skill</h2>
        <button onClick={() => value.dispatchProvided({ type: "SORT_NAME" })}>
          ソートテスト
        </button>
        <button
          onClick={() => value.dispatchProvided({ type: "SORT_PROFICIENCY" })}
        >
          習熟度順
        </button>
        <button
          onClick={() => value.dispatchProvided({ type: "SORT_INTEREST" })}
        >
          興味度順
        </button>
        <SkillUl>
          {value.stateProvided.skill.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </SkillUl>
        <Link to={"/"}>戻る</Link>
      </div>
    </motion.div>
  );
};

export default Skill;
