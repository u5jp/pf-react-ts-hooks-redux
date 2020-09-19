import React, { useContext, useEffect } from "react";
import SkillCard from "./SkillCard";
import AppContext from "../contexts/AppContext";
import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";

import { AnimatePresence, motion } from "framer-motion";

const SkillPage = styled.div`
  margin-top: 50px;
  h1 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
  }
`;
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
  const location = useLocation();
  const [_, rootPath] = location.pathname.split("/");
  useEffect(() => {
    document.title = rootPath;
    return () => {
      document.title = "ReactApp";
    };
  });
  return (
    <motion.div
      animate={{ rotateY: 0, opacity: 1 }}
      initial={{ rotateY: 90, opacity: 0 }}
      exit={{ rotateY: -90, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SkillPage>
        <h1>Skill</h1>
        <button onClick={() => value.dispatchProvided({ type: "SORT_NAME" })}>
          ソートネーム
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
      </SkillPage>
    </motion.div>
  );
};

export default Skill;
